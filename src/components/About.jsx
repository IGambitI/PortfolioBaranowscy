import { motion } from 'framer-motion'

import { style } from '../style'
import { ChessSetCanvas } from './canvas'

const About = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>

          {/*Dot and gradient line next to text*/}
          <div className='w-5 h-5 rounded-full bg-[#6457F0]' />
          <div className='w-1 sm:h-80 h40 bg-gradient-to-b from-[#6457F0] to-[#100d25]' />

        </div>

        {/*About me section*/}
        <div>
          <h1 className={`${style.heroHeadText}`}>Hi, I'm a <span className='text-[#6457F0]'>software developer</span></h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
            This is the place that <br className='sm:block hidden' />i describe my skills briefly
          </p>
        </div>

      </div>
      <ChessSetCanvas />
      <div className='absolute xs-bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#skills">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{y: [0, 24, 0]}} transition={{duration:1.5, repeat: Infinity, repeatType: 'loop'}} className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default About