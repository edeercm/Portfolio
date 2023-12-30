import './App.css'
import Navbar from './components/Navbar/navbar'
import Intro from './components/Intro/intro'
import AboutMe from './components/AboutMe/aboutme'
import Skills from './components/Skills/Skills'
import Education from './components/Education/education'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import BackToTopBtn from './components/BackToTopBtn/backtotopbtn'
import Home from './pages/Home'


function App() {
  
  return (
    <>
    {/* <Intro /> */}
    <Home />
    <AboutMe />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <BackToTopBtn />
    </>
  )
}

export default App
