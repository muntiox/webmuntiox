// ── A tiny blocky heart, drawn pixel by pixel ───────────────────────
// Used as the hunt's life-counter: one heart per clue, empty until
// found. Built from a fixed 7×7 bitmap rendered as SVG rects with
// crisp edges, so it reads as pixel art at any size.
const HEART_BITMAP = [
  [0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
]

export default function PixelHeart({
  filled,
  size = 14,
  pop = false,
}: {
  filled: boolean
  size?: number
  pop?: boolean
}) {
  const cells: { x: number; y: number }[] = []
  HEART_BITMAP.forEach((row, y) => {
    row.forEach((on, x) => {
      if (on) cells.push({ x, y })
    })
  })
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      shapeRendering="crispEdges"
      aria-hidden="true"
      style={{
        display: 'block',
        filter: filled ? 'drop-shadow(0 0 4px rgba(217,115,122,0.65))' : 'none',
        transform: pop ? 'scale(1.4)' : 'scale(1)',
        transition: 'transform 0.45s cubic-bezier(0.2,0.8,0.2,1.4)',
      }}
    >
      <g fill={filled ? '#d9737a' : 'rgba(255,255,255,0.16)'}>
        {cells.map((c) => (
          <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} />
        ))}
      </g>
    </svg>
  )
}
