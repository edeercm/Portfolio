import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm/ContactForm'



const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8E8E93;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const Container = styled.div`
  width: 50%;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media (max-width: 575.97px) {
    width: 100%;
  }
`;

const Label = styled.h1`
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
  font-family: 'Bahttra_Signature', sans-serif;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
    font-size: 4.75rem;
  }
`;

const LabelTwo = styled.h1`
  color: #fff;
  font-size: 1.75rem;
  font-family: 'VIC', sans-serif;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.97px) {
  }
`;

const ContactMe = () => {
  return <>
    <Section id='contact'>
      <Container className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-column align-items-center">
            <div className='d-flex flex-column text-center'>
              <Label>Let's Chat</Label>
              <LabelTwo>and <strong>craft</strong> something together</LabelTwo>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>

    </Section>
  </>
}

export default ContactMe