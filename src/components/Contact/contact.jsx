import React from 'react'
import ContactForm from './ContactForm/contactform'
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import '../Contact/Contact.css'

const contact = () => {
  return <>
    <section id='contact'>
      <div className="container-xxl container-md container-sm d-flex align-items-center justify-content-center" style={{ width: '100%', height: '70vh' }}>
        <div className="row contact-subcontainer">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className='d-flex align-items-center justify-content-center text-center'>
              <h2 className='contact-tittle'>Let's Connect</h2>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className='d-flex justify-content-center'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
}

export default contact