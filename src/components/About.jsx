import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate, useInView } from 'framer-motion'
import stylesModule from './About.module.css'
import retroCar from '../assets/retrocar.gif'
import cyberspace from '../assets/cyberspace.mp4'

const About = () => {

  const aboutTextRef = useRef(null)
  const isInView = useInView(aboutTextRef)
 
  


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
    <div className="relative w-[180vmin] h-[150vmin] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
      <source src={cyberspace} type="video/mp4" />
      </video>
      
        <motion.img
        src={retroCar}
        alt="Retro Car"
        style={{ x, scaleX }}

        className={stylesModule.retroCar}
      />

      <div className={stylesModule.aboutContainer}>
        <motion.div
            ref={aboutTextRef}
            className={stylesModule.aboutText}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ?  { opacity: 1, y: 0 } : { opacity : 0, y: 50}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
        <h2 className={`${stylesModule.aboutTitle} ${stylesModule.neonText}`}>About me!</h2>
        <p>
          I'm a Web Developer who is located in Stockholm and has a passion for creating modern stylized Web Applications.
          I've had experience in 3D Modelling, Game Development and now implementing what I've previously learned into Web Development.
          I love to learn new things and I'm always looking for new challenges.
        </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About