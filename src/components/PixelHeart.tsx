// ── A tiny blocky heart, drawn pixel by pixel ───────────────────────
// Used as the hunt's life-counter: one heart per clue, empty until
// found. Built from a fixed 7×7 bitmap rendered as SVG rects with
// crisp edges, so it reads as pixel art at any size. Empty hearts get
// a thin silhouette outline (their fill is almost nothing) so the
// heart shape still reads before it's ever found; filled hearts stay
// deliberately muted rather than a solid, loud coral.
const HEART_BITMAP = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
]

const CELLS: { x: number; y: number }[] = []
HEART_BITMAP.forEach((row, y) => {
  row.forEach((on, x) => {
    if (on) CELLS.push({ x, y })
  })
})

// Only the true silhouette edges (a cell border that touches an "off"
// cell or the grid edge) — not every internal cell boundary — so the
// outline reads as one clean heart shape instead of a busy grid.
function atCell(x: number, y: number): boolean {
  return y >= 0 && y < HEART_BITMAP.length && x >= 0 && x < HEART_BITMAP[0].length && HEART_BITMAP[y][x] === 1
}
const OUTLINE_SEGMENTS: { x1: number; y1: number; x2: number; y2: number }[] = []
CELLS.forEach(({ x, y }) => {
  if (!atCell(x, y - 1)) OUTLINE_SEGMENTS.push({ x1: x, y1: y, x2: x + 1, y2: y })
  if (!atCell(x, y + 1)) OUTLINE_SEGMENTS.push({ x1: x, y1: y + 1, x2: x + 1, y2: y + 1 })
  if (!atCell(x - 1, y)) OUTLINE_SEGMENTS.push({ x1: x, y1: y, x2: x, y2: y + 1 })
  if (!atCell(x + 1, y)) OUTLINE_SEGMENTS.push({ x1: x + 1, y1: y, x2: x + 1, y2: y + 1 })
})

// Walk the outline segments into a single ordered loop, so the heart can
// render as one continuous <polygon> instead of ~30 independent <rect>/
// <line> primitives. At small pixel sizes, crisp-edge-rendering that many
// separate primitives snaps each one individually, and the inconsistent
// snapping can open a visible gap in the outline — a single closed shape
// never has that seam.
function buildOutlinePoints(): string {
  const key = (x: number, y: number) => `${x},${y}`
  const adjacency = new Map<string, string[]>()
  OUTLINE_SEGMENTS.forEach(({ x1, y1, x2, y2 }) => {
    const a = key(x1, y1)
    const b = key(x2, y2)
    if (!adjacency.has(a)) adjacency.set(a, [])
    if (!adjacency.has(b)) adjacency.set(b, [])
    adjacency.get(a)!.push(b)
    adjacency.get(b)!.push(a)
  })
  const start = [...adjacency.keys()].sort((a, b) => {
    const [ax, ay] = a.split(',').map(Number)
    const [bx, by] = b.split(',').map(Number)
    return ay - by || ax - bx
  })[0]
  const path = [start]
  let prev: string | null = null
  let current = start
  while (true) {
    const next = adjacency.get(current)!.find((n) => n !== prev)
    if (next === undefined || next === start) break
    path.push(next)
    prev = current
    current = next
  }
  return path.join(' ')
}
const OUTLINE_POINTS = buildOutlinePoints()

export default function PixelHeart({
  filled,
  size = 14,
  pop = false,
}: {
  filled: boolean
  size?: number
  pop?: boolean
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      shapeRendering="crispEdges"
      aria-hidden="true"
      style={{
        display: 'block',
        filter: filled ? 'drop-shadow(0 0 2px rgba(217,115,122,0.3))' : 'none',
        transform: pop ? 'scale(1.4)' : 'scale(1)',
        transition: 'transform 0.45s cubic-bezier(0.2,0.8,0.2,1.4), filter 0.4s ease',
      }}
    >
      <polygon
        points={OUTLINE_POINTS}
        fill={filled ? 'rgba(217,115,122,0.55)' : 'rgba(255,255,255,0.05)'}
        stroke={filled ? 'rgba(217,115,122,0.75)' : 'rgba(255,255,255,0.32)'}
        strokeWidth={0.16}
        strokeLinejoin="miter"
      />
    </svg>
  )
}
