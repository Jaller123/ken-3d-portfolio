import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import alloverse from '../assets/alloverse.mp4'
import cartify from '../assets/cartify.mp4'

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  }

  const slides = [
    {
      video: alloverse,
      title: "3D Sandbox VR Game",
      description: "Built with Unity and VRToolkit. A creative sandbox world in VR.",
    },
    {
      video: cartify,
      title: "E-commerce Web App",
      description: "A modern cart system using React and Node.js.",
    },
  ]

  return (
    <div className="w-full h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-red-900 flex items-center justify-center">
      <div className="w-[90%] max-w-6xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="p-4">
              <video
                src={slide.video}
                controls
                className="w-full rounded-xl shadow-md"
              />
              <h2 className="text-2xl font-semibold text-white mt-4">{slide.title}</h2>
              <p className="text-purple-300">{slide.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Works
