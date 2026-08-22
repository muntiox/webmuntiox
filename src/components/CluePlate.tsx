import { useState } from 'react'
import { markClueFound } from '../lib/clues'
import type { ClueId } from '../lib/clues'

// ── Clue: pick a plate ───────────────────────────────────────────────
// Two small options, side by side — no drag, no hold, nothing to
// figure out. Pick the plant and it counts, quietly. Pick the other
// one and nothing is lost but a beat: a small reminder, and the
// choice is still right there to make differently.
export default function CluePlate({ id }: { id: ClueId }) {
  const [choice, setChoice] = useState<'none' | 'animal' | 'plant'>('none')
  const solved = choice === 'plant'

  const pick = (which: 'animal' | 'plant') => {
    if (solved) return
    setChoice(which)
    if (which === 'plant') markClueFound(id)
  }

  return (
    <div className="mxo-plate">
      <p className="mxo-plate-label">Pick a plate</p>
      <div className="mxo-plate-options">
        <button
          type="button"
          className={`mxo-plate-opt${choice === 'animal' ? ' is-wrong' : ''}`}
          onClick={() => pick('animal')}
          disabled={solved}
        >
          <span className="mxo-plate-emoji" aria-hidden="true">
            🐷
          </span>
          <span className="mxo-plate-caption">Someone</span>
        </button>
        <button
          type="button"
          className={`mxo-plate-opt${solved ? ' is-right' : ''}`}
          onClick={() => pick('plant')}
          disabled={solved}
        >
          <span className="mxo-plate-emoji" aria-hidden="true">
            🥑
          </span>
          <span className="mxo-plate-caption">Something</span>
        </button>
      </div>
      <p className={`mxo-plate-msg${choice !== 'none' ? ' is-visible' : ''}${solved ? ' is-right-msg' : ''}`}>
        {solved ? 'Good choice.' : choice === 'animal' ? "You can try again. They don't. Choose wisely." : ''}
      </p>
    </div>
  )
}
