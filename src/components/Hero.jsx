import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'
import frontendLogo from '../assets/Kenathlogo.png'
import frontendDev from '../assets/FrontendDevlogo.png'
import stylesModule from './Hero.module.css'

const Hero = () => {
    const logoRef = useRef(null)

  useEffect(() => {
    const logo = logoRef.current

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
      logo.removeEventListener('mousemove', handleMouseMove)
      logo.removeEventListener('mouseleave', resetRotation)
    }
  }, [])

  return (
    <section className={stylesModule.section}>
      <div className={stylesModule.frontendLogo} >
        <img  src={frontendLogo}
          ref={logoRef}
          className={stylesModule.logoImage} />
      </div>
      <div className={stylesModule.frontendDevLogo}>
        <img src={frontendDev}
          className={stylesModule.devLogoImage} />
      </div>
      <video
        className={stylesModule.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      <div className={stylesModule.canvasWrapper}>
        <ComputersCanvas />
      </div>


    </section>
  )
}

export default Hero
