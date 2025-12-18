import { useEffect, useRef } from 'react'

const createParticles = (canvas, opts) => {
  if (!canvas) return () => {}
  const ctx = canvas.getContext('2d')
  const particles = Array.from({ length: opts.count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() * 2 - 1) * opts.speed,
    vy: (Math.random() * 2 - 1) * opts.speed,
    r: opts.radius + Math.random() * opts.radius * 0.5,
  }))

  let rafId
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = opts.color
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    })
    rafId = requestAnimationFrame(draw)
  }

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  resize()
  draw()

  return () => {
    cancelAnimationFrame(rafId)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

const LoaderOverlay = ({ visible }) => {
  const bgRef = useRef(null)
  const fgRef = useRef(null)

  useEffect(() => {
    if (!visible) return undefined
    const cleanups = []
    cleanups.push(
      createParticles(bgRef.current, {
        count: 60,
        radius: 1.5,
        speed: 0.3,
        color: 'rgba(255,255,255,0.25)',
      })
    )
    cleanups.push(
      createParticles(fgRef.current, {
        count: 30,
        radius: 2.4,
        speed: 0.6,
        color: 'rgba(255,255,255,0.6)',
      })
    )
    return () => cleanups.forEach((fn) => fn())
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      aria-label="Loading"
    >
      <canvas ref={bgRef} className="absolute inset-0" />
      <canvas ref={fgRef} className="absolute inset-0" />
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-white/50 border-t-white animate-spin" />
        <p className="text-white text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  )
}

export default LoaderOverlay
