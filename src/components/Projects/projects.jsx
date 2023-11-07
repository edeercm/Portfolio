import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsGithub } from 'react-icons/bs'
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
      <div className="container-xxl container-md container-sm projects-container d-flex align-items-center justify-content-center" >
        <div className="row"  >
          <div className="col-lg-12 mb-5 text-center">
            <h2 className='projects-tittle'>Projects</h2>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-start justify-content-end mt-4">
                <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1350" data-aos-easing="ease-in-out">
                  <div className="project-name" >
                    <h5>SNKRS ECCOMERCE</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1450" data-aos-easing="ease-out">
                  <img src={snkrs} alt="SNKRS Project" className='project-img' />
                  <div className='d-flex align-items-center justify-content-center'>
                    <img src={snkrsmobile} alt="SNKRS Project" className='project-img-mobile' />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-end justify-content-start" data-aos="fade-left" data-aos-duration="1450" data-aos-easing="ease-out">
                <div className="project-icons d-flex flex-column gap-3 mb-4">
                  <a href="https://snkrslabs.netlify.app/" target='_blank'><RxExternalLink /></a>
                  <a href="https://github.com/edeercm/SNKRS" target='_blank'><BsGithub /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card col-lg-12 col-md-12 col-sm-12 mt-5">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-start justify-content-end mt-3">
                <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="1350" data-aos-easing="ease-in-out">
                  <div className="project-name" >
                    <h5>TEXT ENCRYPTER</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1450" data-aos-easing="ease-out">
                  <img src={encrypter} alt="Encrypter Project" className='project-img' />
                  <div className='d-flex align-items-center justify-content-center'>
                    <img src={encryptermobile} alt="SNKRS Project" className='project-img-mobile' />
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 d-flex align-items-end justify-content-start"  data-aos="fade-left" data-aos-duration="1450" data-aos-easing="ease-out">
                <div className="project-icons  d-flex flex-column gap-3 mb-3">
                  <a href="https://edeercm.github.io/EncriptadorDeTextoAlura/" target='_blank'><RxExternalLink /></a>
                  <a href="https://github.com/edeercm/EncriptadorDeTextoAlura" target='_blank'><BsGithub /></a>
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