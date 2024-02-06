import Header from './components/Header/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
import './App.css'

function App() {
  return <>
    <Header />
    <div id='home'>
      <Home />
    </div>
    <div id='skills'>
      <Skills />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    <div id='contactMe'>
      <ContactMe />
    </div>
  </>
}

export default App


