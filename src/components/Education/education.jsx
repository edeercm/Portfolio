import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import bg1 from '../../assets/images/education/bg1.png'
import '../Education/Education.css'
import { Link } from 'react-scroll'
import { VscVerifiedFilled } from 'react-icons/vsc'
import { IoMdSchool } from 'react-icons/io'
import { GrOracle } from 'react-icons/gr'
import { BiSolidCubeAlt } from 'react-icons/bi'

const education = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <section id='education'>
      <div className="container-xxl container-md container-sm" >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12" >
            <img src={bg1} alt="Education-img" className='education-img' />
          </div>
          <div className={`col-lg-6 col-md-12 col-sm-12 d-flex justify-content-${window.innerWidth <= 576 ? 'start' : 'center'}`}>
            <div className="row" style={{ width: window.innerWidth <= 576 ? '100%' : '75%' }}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="education-title">
                  <h1>Education</h1>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="education-career-container">
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay="0">
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
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay="250">
                    <div className='education-description'>
                      <h3 className='mb-1'>Front End Developer</h3>
                      <span>Oracle Next Education (ONE) project + Alura Latam</span>
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
                  <div data-aos="fade-right" data-aos-duration="1250" data-aos-delay="500">
                    <div className='education-description'>
                      <h3>Certificates</h3>
                      <div className='education-link-container d-flex flex-row gap-2'>
                        <a href='https://app.aluracursos.com/program/certificate/a68f3cd6-df17-4a66-8f8a-5ab3077f8431' target="_blank" rel="noopener noreferrer" className='education-label'><VscVerifiedFilled /></a>
                        <a href='https://app.aluracursos.com/program/certificate/a68f3cd6-df17-4a66-8f8a-5ab3077f8431' target="_blank" rel="noopener noreferrer" className='education-label'><VscVerifiedFilled /></a>
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



