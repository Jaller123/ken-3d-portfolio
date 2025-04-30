import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'


import stylesModule from './Hero.module.css'

const Hero = () => {
  
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
