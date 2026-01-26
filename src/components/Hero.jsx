import { useEffect, useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'
import heroBgPoster from '../assets/herobg.png'
import kenathLogo from '../assets/Kenathlogo.png'
import frontendDev from '../assets/frontendDevLogo.png'
import stylesModule from './Hero.module.css'

const Hero = () => {
    const logoRef = useRef(null)

    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 4])
  useEffect(() => {
    const logo = logoRef.current
    const imagePreloads = [kenathLogo, frontendDev, heroBgPoster]
    const images = imagePreloads.map((src) => {
      const img = new Image()
      img.src = src
      return img
    })

    const videoPreload = document.createElement('link')
    videoPreload.rel = 'preload'
    videoPreload.as = 'video'
    videoPreload.href = heroBgVideo
    videoPreload.type = 'video/mp4'
    document.head.appendChild(videoPreload)

    const handleMouseMove = (e) => {
      const rect = logo.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const rotateX = (-y / 20).toFixed(2)
      const rotateY = (x / 40).toFixed(2)

      logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const resetRotation = () => {
      logo.style.transform = `rotateX(0deg) rotateY(0deg)`
    }

    logo.addEventListener('mousemove', handleMouseMove)
    logo.addEventListener('mouseleave', resetRotation)

    return () => {
      images.splice(0, images.length)
      if (videoPreload.parentNode) {
        videoPreload.parentNode.removeChild(videoPreload)
      }
      logo.removeEventListener('mousemove', handleMouseMove)
      logo.removeEventListener('mouseleave', resetRotation)
    }
  }, [])

  return (
    <section
      className={stylesModule.section}
      style={{ backgroundImage: `url(${heroBgPoster})` }}
    >
      <div className={stylesModule.heroImages}>
        <div className={stylesModule.kenLogo} >
          <img
            src={kenathLogo}
            ref={logoRef}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={stylesModule.logoImage}
          />
        </div>
        <div className={stylesModule.frontendDevLogo}>
        <motion.img
            src={frontendDev}
            style={{ scale }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={stylesModule.devLogoImage}
          />
        </div>
      </div>
      <video
        className={stylesModule.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroBgPoster}
        disablePictureInPicture
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>
<div className={stylesModule.box}>
      <div className={stylesModule.canvasWrapper}>
        <ComputersCanvas />
         <div className={stylesModule.canvasOverlay}></div>
      </div>
</div>

    </section>
  )
}

export default Hero
