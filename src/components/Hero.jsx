import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'

const Hero = () => {
  return (
    <section className="relative w-full h-[185vw] overflow-hidden">
      {/* 🔁 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* 🌟 Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#550bf7]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`neon-text ${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#550bf7]">Kenath.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Frontend Developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
