// constants/index.js
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

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
]

export const projectSlides = [
  {
    video: ams,
    title: "Advanced Mocking Service",
    description:
      "AMS is a fullstack app made in my internship with two of my classmates where we all built this project together. It's a tool for developers and testers to create and simulate mock APIs, making it easier to test systems when real services are missing, unfinished, or hard to access. It supports custom requests, responses, scenarios, and traffic logs through a simple interface.",
    techStack: [html, css, figma, javascript, react, docker, nodejs, mysql, cypress],
    link: "https://github.com/Jaller123/AMS",
  },
  {
    video: cartify,
    title: "E-commerce Web App",
    description:
      "This was the first fullstack app I made during my free time outside of my education. I spent an entire summer learning backend using MongoDB while also cooperating Storybook with my frontend. I made a frontend, backend and app repo for this project and overall it was valuable and exciting project I worked a long time on.",
    techStack: [html, css, figma, javascript, react, storybook, nodejs, mongodb],
    link: "https://github.com/stars/Jaller123/lists/cartify",
  },
  {
    video: alloverse,
    title: "3D Sandbox VR Game",
    description:
      "This was a project I made in my first internship. I built this app by developing the logic with LUA and made the 3D models using Blender.",
    link: "https://github.com/Kenatho/FerryWheel",
  },
]
