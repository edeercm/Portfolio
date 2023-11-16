// import React, { useState, useEffect } from 'react';
// import { VscArrowSmallUp } from "react-icons/vsc";
// import '../BackToTopBtn/BackToTopBtn.css';

// const BackToTopBtn = () => {

//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {

//     const handleScroll = () => {
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.documentElement.scrollHeight ||
//         document.documentElement.clientHeight >= document.documentElement.scrollHeight;

//       // Agregar un retraso de 1000 milisegundos (1 segundo) para mostrar el botón
//       if (isBottom) {
//         setTimeout(() => {
//           setShowButton(true);
//         }, 1000); // Cambiar el valor del retraso según sea necesario
//       } else {
//         setShowButton(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <>
//       {showButton && (
//         <button id='backtotopbtn' className={showButton ? 'show slide-and-fade' : ''} onClick={scrollToTop}>
//           <div className='d-flex flex-column align-items-center'>
//             <VscArrowSmallUp />
//             <span>Back To Top</span>
//           </div>
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTopBtn;



import React, { useState, useEffect } from 'react';
import { VscArrowSmallUp } from "react-icons/vsc";
import './BackToTopBtn.css'; // Ajustar la ruta del archivo CSS según la ubicación real

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToTop = window.pageYOffset > 200; // Muestra el botón después de desplazarse 300px hacia abajo
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
          <div className='d-flex flex-column align-items-center'>
            <VscArrowSmallUp />
            {/* <span>Back To Top</span> */}
          </div>
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;





