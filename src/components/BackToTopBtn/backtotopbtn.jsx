import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import '../BackToTopBtn/BackToTopBtn.css';

const BackToTopBtn = () => {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isBottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
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
        <button id='backtotopbtn' onClick={scrollToTop}>
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;


