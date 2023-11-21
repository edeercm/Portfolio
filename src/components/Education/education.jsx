import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg1 from '../../assets/images/education/bg1.png'
import '../Education/Education.css'
import { VscVerifiedFilled } from 'react-icons/vsc'
import { IoMdSchool } from 'react-icons/io'
import { GrOracle } from 'react-icons/gr'
import { BiSolidCubeAlt } from 'react-icons/bi'

const education = () => {

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const delay = screenWidth <= 885 ? 0 : 750;
  const delay2 = screenWidth <= 885 ? 250 : 1000;
  const delay3 = screenWidth <= 885 ? 500 : 1250;

  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])

  return <>
    <section id='education'>
      <div className="container-fluid" style={{ paddingRight: '0', paddingLeft: '0' }}>
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12" >
            <div className="education-img-container" data-aos="education-img-animation" data-aos-duration="3000">
              <div className="education-img-content" >
                <img src={bg1} alt="Education-img" className='education-img' />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex align-items-center justify-content-center">
            <div className="row" style={{ width: window.innerWidth <= 576 ? 'auto' : '85%' }}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="education-title">
                  <h1>Education</h1>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="education-career-container">
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay={delay}>
                    <div className='education-description'>
                      <h3 className='mb-1'>Electromechanical Engineer</h3>
                      <span>Instituto Tecnológico Superior de Xalapa</span>
                      <span>Graduate Date | Dec 2023</span>
                      <div className='education-link-container d-flex align-items-center gap-1'>
                        <a href='https://www.itsx.edu.mx/' target="_blank" rel="noopener noreferrer"><IoMdSchool /></a>
                        <a href='https://www.itsx.edu.mx/' target="_blank" rel="noopener noreferrer">Web Site</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay={delay2}>
                    <div className='education-description'>
                      <h3 className='mb-1'>Front End Developer</h3>
                      <span>Oracle Next Education (ONE) + Alura Latam</span>
                      <div className='education-link-container d-flex flex-row gap-3'>
                        <div className='d-flex align-items-center gap-1'>
                          <a href='https://www.itsx.edu.mx/' target="_blank" rel="noopener noreferrer"><BiSolidCubeAlt /></a>
                          <a href='https://www.aluracursos.com/' target="_blank" rel="noopener noreferrer">Alura</a>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                          <a href='https://www.oracle.com/mx/education/oracle-next-education/' target="_blank" rel="noopener noreferrer" ><GrOracle /></a>
                          <a href='https://www.oracle.com/mx/education/oracle-next-education/' target="_blank" rel="noopener noreferrer" >ONE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay={delay3}>
                    <div className='education-description'>
                      <h3>Certificates</h3>
                      <div className='education-link-container d-flex flex-row gap-2'>
                        <a href='https://app.aluracursos.com/program/certificate/a68f3cd6-df17-4a66-8f8a-5ab3077f8431' target="_blank" rel="noopener noreferrer" className='education-label'><VscVerifiedFilled /></a>
                        <a href='https://drive.google.com/file/d/1h-0En3pIN8J0NyWqAgG0z0egTZIOKY7I/view?usp=drive_link' target="_blank" rel="noopener noreferrer" className='education-label'><VscVerifiedFilled /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>











        </div>
      </div>
    </section>
  </>
}

export default education



