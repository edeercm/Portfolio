import React, { useState, useEffect } from 'react';
import { VscArrowSmallUp } from "react-icons/vsc";
import './BackToTopBtn.css'; // Ajustar la ruta del archivo CSS según la ubicación real

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToTop = window.pageYOffset > 750; // Muestra el botón después de desplazarse 300px hacia abajo
      setShowButton(scrolledToTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <button id='backtotopbtn' className='show slide-and-fade' onClick={scrollToTop}>
          <div className='d-flex justify-content-center'>
            <VscArrowSmallUp />
          </div>
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;





