import React from 'react'
import ContactForm from './ContactForm/contactform'
import '../Contact/Contact.css'

const contact = () => {
  return <>
    <section id='contact'>
      <div className="container-xxl container-md container-sm">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12" >
            <div className='d-flex flex-column justify-content-center'>
              <div className='contact-tittle text-center'>
                <h2>Let's Connect</h2>
                <span>and <strong>craft</strong> something together</span>
              </div>
              <div className='d-flex justify-content-center'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
}

export default contact