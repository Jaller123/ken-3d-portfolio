import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { styles } from '../../styles'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'
import retroCar from '../assets/retrocar.gif'

import stylesModule from './Hero.module.css'

const Hero = () => {
  const x = useMotionValue(-300)
  const facingRightRef = useRef(true) 
  const scaleX = useMotionValue(1) 

  const lastX = useRef(x.get())

  useEffect(() => {
    const controls = animate(x, 300, {
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
      onUpdate: (latest) => {
        const direction = latest - lastX.current

        if (direction < 0 && latest <= -290 && facingRightRef.current) {
          facingRightRef.current = false
          scaleX.set(-1)
        } else if (direction > 0 && latest >= 290 && !facingRightRef.current) {
          facingRightRef.current = true
          scaleX.set(1)
        }

        lastX.current = latest
      }
    })

    return () => controls.stop()
  }, [])
  
  return (
    <section className={stylesModule.section}>
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

      <motion.img
        src={retroCar}
        alt="Retro Car"
        style={{ x, scaleX }}

        className={stylesModule.retroCar}
      />

      <div className={stylesModule.aboutContainer}>
        <h2 className={`${stylesModule.aboutTitle} ${stylesModule.neonText}`}>About me!</h2>
        <p className={stylesModule.aboutText}>
          I'm a Web Developer who is located in Stockholm and has a passion for creating modern stylized Web Applications.
          I've had experience in 3D Modelling, Game Development and now implementing what I've previously learned into Web Development.
          I love to learn new things and I'm always looking for new challenges.
        </p>
      </div>

      <div className={stylesModule.heroContent}>
        <div className={stylesModule.verticalIndicator}>
          <div className={stylesModule.dot} />
          <div className={stylesModule.line} />
        </div>
        <div>
          <h1 className={`${stylesModule.heroText} ${stylesModule.neonText}`}>
            Hi, I'm <span style={{ color: '#550bf7' }}>Kenath.</span>
          </h1>
          <p className={stylesModule.subText}>
            I'm a Frontend Developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
