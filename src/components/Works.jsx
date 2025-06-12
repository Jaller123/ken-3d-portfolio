import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import alloverse from '../assets/alloverse.mp4'
import cartify from '../assets/cartify.mp4'
import ams from '../assets/ams.mp4'
import blender from '../assets/logos/blender.png'
import docker from '../assets/logos/docker.png'
import cypress from '../assets/logos/cypress.png'
import storybook from '../assets/logos/storybook.svg'
import css from '../assets/logos/css.png'
import figma from '../assets/logos/figma.png'
import html from '../assets/logos/html.png'
import javascript from '../assets/logos/javascript.png'
import mongodb from '../assets/logos/mongodb.png'
import mysql from '../assets/logos/mysql.png'
import nodejs from '../assets/logos/nodejs.png'
import react from '../assets/logos/react.png'
import threejs from '../assets/logos/threejs.png'

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
      video: ams,
      title: "Advanced Mocking Service",
      description: "AMS is a fullstack app made in my internship with two of my classmates where we all built this project together. It's a tool for developers and testers to create and simulate mock APIs, making it easier to test systems when real services are missing, unfinished, or hard to access. It supports custom requests, responses, scenarios, and traffic logs through a simple interface.",
      techStack: [html, css, figma, javascript, react, docker, nodejs, mysql, cypress],
      link: "https://github.com/Jaller123/AMS",
    },
    {
      video: cartify,
      title: "E-commerce Web App",
      description: "This was the first fullstack app I made during my free time outside of my education. I spent an entire summer learning backend using MongoDB while also cooperating Storybook with my frontend. I made a frontend, backend and app repo for this project and overall it was valuable and exciting project I worked a long time on.",
      techStack: [html, css, figma, javascript, react, storybook, nodejs, mongodb,],
      link: "https://github.com/stars/Jaller123/lists/cartify",
    },
    {
      video: alloverse,
      title: "3D Sandbox VR Game",
      description: "This was a project I made in my first internship. I built this app by developing the logic/functionalities through terminal with LUA and made the 3D Models/Map using Blender.",
      link: "https://github.com/Kenatho/FerryWheel",
    },
  ]

  return (
 <div className="w-full min-h-[70vh] max-h-[100vh] md:max-h-[1000px] px-2 sm:px-4 py-6 bg-gradient-to-r from-purple-900 via-gray-900 to-red-900 flex items-center justify-center">
<div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-5 md:p-6 md:max-w-[600px] shadow-lg">
    <Slider {...settings}>
      {slides.map((slide, index) => (
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
  )
}

export default Works
