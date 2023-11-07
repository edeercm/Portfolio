import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../SkillsCarousel/SkillsCarousel.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: -17.5
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
    partialVisibilityGutter: 15
  },
  mobile: {
    breakpoint: { max: 576, min: 428 },
    items: 1,
    partialVisibilityGutter: 60
  },
  mobilexs: {
    breakpoint: { max: 390, min: 390 },
    items: 1,
    partialVisibilityGutter: 30
  },
  mobilexxs: {
    breakpoint: { max: 375, min: 360 },
    items: 1,
    partialVisibilityGutter: 15
  }
};

const SkillsCarousel = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <Carousel
      responsive={responsive}
      partialVisible={true}
      ssr={true}
      removeArrowOnDeviceType={["tablet", "mobile", "mobilexs", "mobilexxs"]}
    >
      <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="250">
        <div className="card d-flex flex-column justify-content-between" >
          <h3 className='card-title'>HTML5</h3>
          <div className='d-flex flex-column lh-1'>
            <span className='card-percent'>70%</span>
            <span className='card-description'>knowledge skill level</span>
          </div>
          <div className="bg-line-color">
            <div className="line-color" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
        <div className="card d-flex flex-column justify-content-between">
          <h3 className='card-title'>Bootstrap</h3>
          <div className='d-flex flex-column lh-1 '>
            <span className='card-percent'>45%</span>
            <span className='card-description'>knowledge skill level</span>
          </div>
          <div className="bg-line-color">
            <div className="line-color" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="750">
        <div className="card d-flex flex-column justify-content-between">
          <h3 className='card-title'>Photoshop</h3>
          <div className='d-flex flex-column lh-1 '>
            <span className='card-percent'>30%</span>
            <span className='card-description'>knowledge skill level</span>
          </div>
          <div className="bg-line-color">
            <div className="line-color" style={{ width: '30%' }}></div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
        <div className="card d-flex flex-column justify-content-between">
          <h3 className='card-title'>React</h3>
          <div className='d-flex flex-column lh-1 '>
            <span className='card-percent'>40%</span>
            <span className='card-description'>knowledge skill level</span>
          </div>
          <div className="bg-line-color">
            <div className="line-color" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1250">
        <div className="card d-flex flex-column justify-content-between">
          <h3 className='card-title'>CCS3</h3>
          <div className='d-flex flex-column lh-1 '>
            <span className='card-percent'>60%</span>
            <span className='card-description'>knowledge skill level</span>
          </div>
          <div className="bg-line-color">
            <div className="line-color" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </Carousel>
  </>
}

export default SkillsCarousel



