import React, { useEffect } from 'react'
import AOS from 'aos'
import me from '../../assets/images/aboutme/me.jpg'
import 'aos/dist/aos.css'
import '../AboutMe/AboutMe.css'

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const AboutMe = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <section id='aboutme' className='aboutme-section'>
      <div className="container-xxl container-md container-sm">
        <div className="row gap-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.175rem', color: '#050505' }}>About Me</h1>
          </div>
          <div className="col-lg-12 d-flex flex-column align-items-center">
            <div className='aboutme-content d-flex flex-column' >
              <span>My name is</span>
              <span style={{ fontFamily: 'Kusack Signature, sans-serif', fontSize: '4rem', marginTop: '0.25rem', marginBottom: '-1.35rem' }}>Eder Cadena</span>
              <span>I am passionate about transforming<br></br>ideas into engaging web experiences.</span>
              <span>With a high level of proficiency and a keen eye for detail.</span>
              <span>I have consistently showcased my dedication to staying up-to-date with the latest industry standards and regulations.</span>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center mt-3">
            <div className='aboutme-icons d-flex flex-row justify-content-center gap-4' style={{ width: '50%' }}>
              <a href="https://www.instagram.com/edeercm/" target='_blank'><BsInstagram /></a>
              <a href="https://github.com/edeercm" target='_blank'><BsGithub /></a>
              <a href="https://www.linkedin.com/in/edeercm/" target='_blank'><BsLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default AboutMe




