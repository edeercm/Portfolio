import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Challenges from './pages/Challenges';
import Contact from './pages/Contact';
import './App.css'
import './reset.css'

function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='challenges' element={<Challenges />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </>
}

export default App


