import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './pages/Home'
import Challenges from './pages/Challenges';
import './App.css'
import './reset.css'

function App() {
  return <>
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="challenges" element={<Challenges />} />
      </Routes>
    </Router>
  </>
}

export default App


