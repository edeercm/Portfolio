import React, { useState, useRef } from 'react'
import { Link } from 'react-scroll' 
import { HiBars3BottomRight } from 'react-icons/hi2';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const offcanvasRef = useRef(null);

  const closeOffcanvas = () => {
    if (offcanvasRef.current) {
      offcanvasRef.current.classList.remove('show'); // Quita la clase 'show' para cerrar el offcanvas
      const backdrop = document.querySelector('.offcanvas-backdrop'); // Reemplaza '.offcanvas-backdrop' con la clase correcta
      if (backdrop) {
        backdrop.remove(); // Elimina el fondo oscuro
      }
    }
  };

  return <>
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-end">
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {/* <Link to='aboutme' className='navbar-item'> About Me</Link>
          <Link to='skills' className='navbar-item'>Skills</Link>
          <Link to='education' className='navbar-item'>Education</Link>
          <Link to='' className='navbar-item'>Projects</Link> */}
          <Link to='' className='navbar-item'>Contact</Link>
        </div>
        <div className="navbar-toggle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#newOffcanvasRight"
          aria-controls="newOffcanvasRight"
        >
          <HiBars3BottomRight 
            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)} //verificar en el futuro por posibles errores de motrar el icono
          />
        </div>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="newOffcanvasRight" aria-labelledby="offcanvasRightLabel" ref={offcanvasRef}>
          <div className="offcanvas-header">
            <div></div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column align-items-center justify-content-center">
            <div className='offcanvas-menu d-flex flex-column text-center'>
              <Link to='aboutme' onClick={closeOffcanvas}>About Me</Link>
              <Link to='skillshobbies' onClick={closeOffcanvas}>Skills</Link>
              <Link to='' onClick={closeOffcanvas}>Education</Link>
              <Link to='' onClick={closeOffcanvas}>Projects</Link>
              <Link to='' onClick={closeOffcanvas}>Contact</Link>
            </div>
            <div className="offcanvas-social-icons d-flex  justify-content-center">
              <Link to={'https://www.linkedin.com/in/edeercm/'} target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></Link>
              <Link to={'https://github.com/edeercm'} target="_blank" rel="noopener noreferrer"><AiFillGithub /></Link>
              <Link to={'https://www.instagram.com/edeercm/'} target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></Link>
            </div>
          </div>
        </div>
        {/* <Link to='#'><img src={logo} alt="" className='img-fluid logo' /></Link> */}
      </div>
    </nav>
  </>
}

export default Navbar