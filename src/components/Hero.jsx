import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { ComputersCanvas } from './canvas'
import heroBgVideo from '../assets/herobgretro.mp4'
import retroCar from '../assets/retrocar.gif';


const Hero = () => {
  return (
    <section className="relative w-full h-[190vw] sm:h-[120vw] overflow-hidden">
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

      <div className="absolute inset-0 z-0">
      <ComputersCanvas />
      </div>

      <motion.img
        src={retroCar}
        alt="Retro Car"
        initial={{ x: '800%' }}
        animate={{ x: '300%' }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute bottom-[-35%] sm:bottom-[60%] md:bottom-[40%] 
          w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px] 
          z-20 max-w-none h-auto" 
        />
      <div className='absolute top-[55%] sm:top-[30%] md:top-[60%] left-1/2 transform -translate-x-1/2 
      max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl 2xl:max-w-[1600px]
      px-4 sm:px-8 xl:px-14 py-2 sm:py-6 xl:py-[106px] bg-[#0f1120]/80 backdrop-blur-sm 
      rounded-xl shadow-xl z-10 text-white'>
        
      <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-8 text-center neon-text">About me!</h2>   
      <p className='text-sm text-lg text-center'>
        I'm a Web Developer who is located in Stockholm and has a passion or creating modern stylized Web Applications. 
        I've had experience in 3D Moddelling, Game Development and now implementing what I've previously learned into Web Development. 
        I love to learn new things and I'm always looking for new challenges. 
      </p>
      </div>
      {/* 🌟 Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
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
