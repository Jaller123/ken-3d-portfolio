import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { projectSlides } from '../constants'
import "../index.css"

const Projects = () => {
  const formatTechName = (src) => {
    if (!src) return 'Tech'
    const base = src.split('/').pop().split('.')[0]
    const map = {
      csharp: 'C#',
      nodejs: 'Node.js',
      mysql: 'MySQL',
      mongodb: 'MongoDB',
      react: 'React',
      reactjs: 'React',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      css: 'CSS',
      html: 'HTML',
      lua: 'Lua',
      unity: 'Unity',
      supabase: 'Supabase',
      postgresql: 'PostgreSQL',
      blender: 'Blender',
      docker: 'Docker',
      storybook: 'Storybook',
      figma: 'Figma',
      bootstrap: 'Bootstrap',
      threejs: 'Three.js',
    }
    const key = base.toLowerCase()
    if (map[base]) return map[base]
    if (map[key]) return map[key]
    const cleaned = base.replace(/[-_]/g, ' ')
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  }
  return (
<div id="projects">
 <div className="w-full min-h-[70vh] max-h-[100vh] md:max-h-[1000px] px-2 sm:px-4 py-6 bg-gradient-to-br from-[#090d1f] via-[#0f1533] to-[#1c0f2f] flex items-center justify-center">
  <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-5 md:p-6 md:max-w-[600px] shadow-lg">
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="text-center">
        <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-purple-200">Projects</p>
        
      </div>
      <Slider {...settings}>
        {projectSlides.map((slide, index) => (
          <div key={index} className="relative z-10 p-2 sm:p-4">
            {slide.video ? (
              <video
                src={slide.video}
                controls
                   className={`relative z-20 mx-auto rounded-xl shadow-mdw-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] rounded-xl shadow-md ${
              slide.title === "Augmented Reality Furniture App"
                ? "h-[600px] max-w-[400px] object-contain aspect-[9/16]"
                : "w-full max-h-[500px] object-cover "
          }`}
              />
            ) : slide.image ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="pointer-events-none w-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] rounded-xl shadow-md object-cover "
              />
            ) : null}
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2 sm:mt-4">{slide.title}</h2>
            <p className="text-sm sm:text-base text-purple-300">{slide.description}</p>
            {slide.techStack && (
              <div className="flex flex-wrap gap-2 mt-2 sm:gap-3">
                {slide.techStack.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt={formatTechName(icon)}
                    title={formatTechName(icon)}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain hover:scale-110 transition-transform"
                  />
                ))}
              </div>
            )}
            <a  
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className='relative z-20 inline-block mt-4 px-4 py-2 bg-[#adff2f] text-black font-semibold rounded hover:bg-[#ff008c] hover:text-white transition'
            >
              View Source Code
            </a>
            {slide.demoLink && (
              <a
                href={slide.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className='relative z-20 inline-block mt-2 ml-4 px-4 py-2 bg-[#adff2f] text-black font-semibold rounded hover:bg-[#ff008c] hover:text-white transitionn'
              >
                View Demo
              </a>
            )}
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
</div>
  )
}

export default Projects
