import { useEffect, useRef, useState } from 'react'

const useInView = (options = {}) => {
  const targetRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = targetRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once !== false) observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px', ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.once, options.threshold, options.rootMargin])

  return { ref: targetRef, inView }
}

export default useInView
