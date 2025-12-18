import { BrowserRouter } from 'react-router-dom'
import { Suspense, lazy, useEffect, useState } from 'react'
import { Navbar, About, Experience, Tech, Contact } from './components'
import LoaderOverlay from './components/LoaderOverlay'

const Hero = lazy(() => import('./components/Hero'))
const Projects = lazy(() => import('./components/Projects'))
const StarsCanvas = lazy(() => import('./components/canvas/Stars'))

const App = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <LoaderOverlay visible={showLoader} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Suspense fallback={null}>
            <Hero />
          </Suspense>
        </div>
        <div className="cursor" />
        <About id="about" />
        <Experience />
        <Tech />
        <Suspense fallback={null}>
          <Projects id="projects" />
        </Suspense>
        <div className="relative z-0">
          <Contact id="contact" />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
