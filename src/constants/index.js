// constants/index.js
import alloverse from '../assets/projects/alloverse.mp4'
import cartify from '../assets/projects/cartify.mp4'
import ams from '../assets/projects/ams.mp4'
import oldPortfolio from '../assets/projects/oldportfolio.png'
import foodapp from '../assets/projects/foodapp.mp4'
import furniturear from '../assets/projects/furniturear.mp4'
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
import bootstrap from '../assets/logos/bootstrap.png'
import lua from '../assets/logos/lua.png'
import unity from '../assets/logos/Unity.png'
import csharp from '../assets/logos/csharp.svg'
import threejs from '../assets/logos/threejs.png'
import comingSoonImg from '../assets/projects/gradcraft.png'
import htmlTech from '../assets/tech/html.png'
import cssTech from '../assets/tech/css.png'
import tsTech from '../assets/tech/typescript.png'
import reactTech from '../assets/tech/reactjs.png'
import supabaseTech from '../assets/tech/supabase.png'
import postgresTech from '../assets/tech/postgreSQL.png'
import pythonTech from '../assets/tech/python.png'

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
]

export const projectSlides = [
    {
    image: comingSoonImg,
    title: "Coming soon...",
    description:
      "A new full-stack experience is on the way. Built with modern web tools and a robust backend, this project will debut soon.",
    techStack: [htmlTech, cssTech, tsTech, reactTech, supabaseTech, postgresTech, pythonTech],
    link: "https://github.com/Jaller123/GradCraft",
  },
  {
    video: ams,
    title: "Advanced Mocking Service",
    description:
      "AMS is a fullstack app made for a consulting company in Stockholm called Regent AB with two of my classmates where we all built this project together. It's a tool for developers and testers to create and simulate mock APIs, making it easier to test systems when real services are missing, unfinished, or hard to access. It supports custom requests, responses, scenarios, and traffic logs through a simple interface. I used HTML, CSS, Figma, JavaScript, React, Node.js, MySQL, Docker and Cypress to build this project.",
    techStack: [html, css, figma, javascript, react, docker, nodejs, mysql, cypress],
    link: "https://github.com/Jaller123/AMS",
  },
    {
    video: alloverse,
    title: "3D Sandbox VR Game",
    description:
      "This was a project made at a company in Stockholm called Alloverse, where I developed a VR sandbox app. I scripted the logic in LUA and created all 3D models and textures in Blender. The goal was to merge my Virtual Reality and 3D design skills by building an interactive virtual environment where users could experiment freely with objects.",
    techStack: [blender, lua],
    link: "https://github.com/Kenatho/FerryWheel",
  },
  {
    video: cartify,
    title: "E-commerce Web App",
    description:
      "This was the first fullstack app I made during my free time outside of my education. I spent an entire summer learning backend using MongoDB while also cooperating Storybook with my frontend to build robust and reusable components. I made a frontend, backend and app repo for this project and overall it was valuable and exciting project I worked a long time on. I used HTML, CSS, Figma, JavaScript, React, Node.js, MongoDB and Storybook to build this project.",
    techStack: [html, css, figma, javascript, react, storybook, nodejs, mongodb],
    link: "https://github.com/stars/Jaller123/lists/cartify",
  },
  {
    image: oldPortfolio,
    title: "My first Portfolio",
    description:
      "This is my first portfolio that I made in 2024. It was a simple React app with some JS state changes and and it was a great learning experience for me and to showcase my projects. I used HTML, CSS, Figma, JavaScript, React, and Bootstrap to build this project.",
    techStack: [html, css, figma, javascript, react, bootstrap],
    link: "https://github.com/Jaller123/Portfolio",
    demoLink: "https://kenath-portfolio.vercel.app",
    
  },
   {
    video: foodapp,
    title: "Food App",
    description:
      "This is a food app I built during my studies, where users can search for recipes to cook at home. It was the first app I developed using React, and it helped me learn the basics of components, state management, and API integration.",
    techStack: [html, css, javascript, react],
    link: "https://github.com/Jaller123/Food-App",
    demoLink: "https://food-app-mu-peach.vercel.app",
  },
  {
    video: furniturear,
    title: "Augmented Reality Furniture App",
    description:
      "This was the first app I built in Augmented Reality. I developed it using C# and designed the UI entirely in Unity. The app was an early exploration into AR interaction and user experience, and it helped me understand how to integrate virtual elements into the real world. While I didn’t use GitHub at the time and don’t have the source code available, the app is still saved on my phone. Feel free to reach out if you'd like a live demo.",
    techStack: [unity, csharp],
  },
]
