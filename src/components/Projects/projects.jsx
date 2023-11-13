import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RxExternalLink } from 'react-icons/rx'
import snkrs from '../../assets/images/projects/snkrs.jpg'
import snkrsmobile from '../../assets/images/projects/snkrsmobile.jpg'
import encrypter from '../../assets/images/projects/encrypter.jpg'
import encryptermobile from '../../assets/images/projects/encryptermobile.jpg'
import '../Projects/Projects.css'

const projects = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <section id="projects">
      <div className="container-xxl projects-container d-flex align-items-center justify-content-center">
        <div className="row"  >
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className='projects-title'>
              <h2>Projects</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1450" data-aos-easing="ease-out">
                <div className='d-flex align-items-center justify-content-evenly'>
                  <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1350" data-aos-easing="ease-in-out">
                    <div className="project-name" >
                      <h5>SNKRS ECCOMERCE</h5>
                    </div>
                  </div>
                  <img src={snkrs} alt="SNKRS Project" className='project-img' />
                  <img src={snkrsmobile} alt="SNKRS Project" className='project-img-mobile' />
                  <div className="project-icon">
                    <a href="https://snkrslabs.netlify.app/" target='_blank'><RxExternalLink /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1450" data-aos-easing="ease-out">
                <div className='d-flex align-items-center justify-content-evenly'>
                  <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1350" data-aos-easing="ease-in-out">
                    <div className="project-name" >
                      <h5>TEXT ENCRYPTER</h5>
                    </div>
                  </div>
                  <img src={encrypter} alt="SNKRS Project" className='project-img' />
                  <img src={encryptermobile} alt="SNKRS Project" className='project-img-mobile' />
                  <div className="project-icon">
                    <a href="https://snkrslabs.netlify.app/" target='_blank'><RxExternalLink /></a>
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

export default projects