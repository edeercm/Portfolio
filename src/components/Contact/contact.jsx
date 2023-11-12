import React from 'react'
import ContactForm from './ContactForm/contactform'
import '../Contact/Contact.css'

const contact = () => {
  return <>
    <section id='contact'>
      <div className="container-xxl container-md container-sm">
        <div className="row">
          <div className="side-left col-lg-6 col-md-12 col-sm-12">
            <div className='contact-tittle'>
              <h2>Let's Connect</h2>
            </div>
          </div>
          <div className="side-right col-lg-6 col-md-12 col-sm-12">
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