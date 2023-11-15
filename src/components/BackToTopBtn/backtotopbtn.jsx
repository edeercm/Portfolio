// import React, { useState, useEffect } from 'react';
// import { MdKeyboardDoubleArrowUp } from "react-icons/md";
// import '../BackToTopBtn/BackToTopBtn.css';

// const BackToTopBtn = () => {
  
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.documentElement.scrollHeight ||
//         document.documentElement.clientHeight >= document.documentElement.scrollHeight;

//       if (isBottom) {
//         setShowButton(true);
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
//         <button id='backtotopbtn' onClick={scrollToTop}>
//           <div className='d-flex flex-column align-items-center gap-1'>
//             <MdKeyboardDoubleArrowUp />
//             <div className='d-flex flex-column align-items-center lh-1'>
//               <span>Top</span>
//               <span>Back</span>
//             </div>
//           </div>
//         </button>
//       )}
//     </>
//   );
// };

// export default BackToTopBtn;


import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import '../BackToTopBtn/BackToTopBtn.css';

const BackToTopBtn = () => {
  
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight ||
        document.documentElement.clientHeight >= document.documentElement.scrollHeight;

      // Agregar un retraso de 1000 milisegundos (1 segundo) para mostrar el botón
      if (isBottom) {
        setTimeout(() => {
          setShowButton(true);
        }, 2000); // Cambiar el valor del retraso según sea necesario
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
          <div className='d-flex flex-column align-items-center gap-1'>
            <MdKeyboardDoubleArrowUp />
            <div className='d-flex flex-column align-items-center lh-1'>
              <span>Top</span>
              <span>Back</span>
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default BackToTopBtn;



