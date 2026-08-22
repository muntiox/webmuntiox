import { useEffect, useRef, useState } from 'react'

// ── Ambient sound toggle — a small waveform icon tucked into the
// corner of the dream-work video, no label. Its own gentle motion at
// rest is the invitation ("there's sound here"); tap it and it plays
// only the first 10 seconds of the clip, looping, however long the
// underlying file actually is.
const LOOP_SECONDS = 10

export default function HeartbeatSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTimeUpdate = () => {
      if (audio.currentTime >= LOOP_SECONDS) audio.currentTime = 0
    }
    audio.addEventListener('timeupdate', onTimeUpdate)
    return () => audio.removeEventListener('timeupdate', onTimeUpdate)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.currentTime = 0
      audio.play().catch(() => {
        /* autoplay/policy hiccup — button just stays off */
      })
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/latidodecorazon.mp3" preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Mute the sound' : 'Play the sound'}
        title={playing ? 'Mute' : 'Sound'}
        className={`mxo-sound-toggle${playing ? ' is-playing' : ''}`}
      >
        <span className="mxo-sound-bar" aria-hidden="true" />
        <span className="mxo-sound-bar" aria-hidden="true" />
        <span className="mxo-sound-bar" aria-hidden="true" />
        <span className="mxo-sound-bar" aria-hidden="true" />
      </button>
    </>
  )
}
