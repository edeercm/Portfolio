import React, { useEffect } from 'react'
import SkillsCarousel from '../Skills/SkillsCarousel/skillscarousel'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Skills/Skills.css'

const Skills = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <section id='skills' >
      <div className='container-xxl container-md container-sm'>
        <div className="row" style={{ gap: '3.75rem' }}>
          <div className="col-lg-12 d-flex justify-content-center">
            <h1 className='skill-tittle'>Skills</h1>
          </div>
          <div className="col-lg-12 col-md-12">
            <SkillsCarousel />
          </div>
        </div>
      </div>
    </section>
  </>

}

export default Skills