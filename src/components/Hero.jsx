import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { ComputersCanvas } from './canvas'
import herobg from '../assets/herobgretro.gif';

const Hero = () => {
  return (
    <section className='hero-section mx-auto'
        style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '185vw',
        }}>Hero</section>
  )
}

export default Hero