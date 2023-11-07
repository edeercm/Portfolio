import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useForm } from 'react-hook-form';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import '../ContactForm/ContactForm.css'

function ContactForm() {

  useEffect(() => {
    AOS.init()
  }, [])

  const { handleSubmit, register, formState: { errors, isDirty, isValid }, trigger, reset } = useForm();

  const onSubmit = (data) => {
    if (isValid) {
      reset();
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  const handleSelectBlur = () => {
    trigger("typeOfInquiry");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='contact-form-container'>
      <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="250">
        <input
          type="text"
          id="Name"
          placeholder='Name'
          style={{ fontFamily: 'Steamflix Grotesk, sans-serif' }}
          {...register("Name", { required: true })}
          onBlur={() => handleBlur("Name")}
          className={`form-control ${errors.Name ? 'is-invalid' : ''}`}
        />
        {errors.Name && <div className="invalid-feedback">Please enter name</div>}
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
        <input
          type="email"
          id="email"
          placeholder='Email'
          style={{ fontFamily: 'Steamflix Grotesk, sans-serif' }}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          onBlur={() => handleBlur("email")}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        {errors.email && <div className="invalid-feedback">Please enter email address</div>}
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="750">
        <textarea
          id="message"
          placeholder='Message'
          style={{ fontFamily: 'Steamflix Grotesk, sans-serif' }}
          {...register("message", { required: true })}
          onBlur={() => handleBlur("message")}
          className={`form-control text-area ${errors.message ? 'is-invalid' : ''}`}
        />
        {errors.message && <div className="invalid-feedback">Please enter message text</div>}
      </div>
      <div className='media-icons d-flex justify-content-center gap-3'>
        <button
          type="submit"
          className={`send send-btn ${!isValid ? 'contact-btn-disabled' : ''}`}
          data-bs-toggle="modal"
          data-bs-target="#contactUsModal"
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSubmit)}
        >
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1000">
            <FaRegPaperPlane />
          </div>
        </button>
        <div className="social d-flex gap-3">
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1250">
            <BsInstagram />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
            <BsGithub />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1750">
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="modal fade" id="contactUsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">¡Thanks for contact me!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <span>I will respond as soon as possible.</span>
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;