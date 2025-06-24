import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { projectSlides } from '../constants'

const Projects = () => {
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
 <div className="w-full min-h-[70vh] max-h-[100vh] md:max-h-[1000px] px-2 sm:px-4 py-6 bg-gradient-to-r from-purple-900 via-gray-900 to-red-900 flex items-center justify-center">
  <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-5 md:p-6 md:max-w-[600px] shadow-lg">
    <Slider {...settings}>
      {projectSlides.map((slide, index) => (
        <div key={index} className="p-2 sm:p-4">
          <video
            src={slide.video}
            controls
            className="w-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] rounded-xl shadow-md object-cover"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2 sm:mt-4">{slide.title}</h2>
          <p className="text-sm sm:text-base text-purple-300">{slide.description}</p>
          {slide.techStack && (
            <div className="flex flex-wrap gap-2 mt-2 sm:gap-3">
              {slide.techStack.map((icon, i) => (
                <img
                  key={i}
                  src={icon}
                  alt="tech icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          )}
          <a  
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block mt-4 px-4 py-2 bg-[#adff2f] text-black font-semibold rounded hover:bg-[#ff008c] hover:text-white transition'
          >
            View Source Code
          </a>
        </div>
      ))}
    </Slider>
  </div>
</div>
</div>
  )
}

export default Projects
