import { useEffect } from 'react';
import Rellax from 'rellax';
import styled from 'styled-components';
import background from '../../assets/images/home/background.jpg'
import img from '../../assets/images/home/img.png'

const Cont = styled.div`
  position: relative;
  width: 100%;
  height: 97.5vh;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  inset: 0;
  z-index: 0;
  
  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;

const Imgtwo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  inset: 0;
  z-index: 5;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
  }

  @media (max-width: 575.98px) {
  }
`;

const ParallaxComp = () => {

  useEffect(() => {
    new Rellax('.parallax-1', {
      speed: -5,
      center: true
    });
    new Rellax('.parallax-2', {
      speed: 5,
      center: true
    });
  }, []);

  return (
    <Cont>
      <div className="parallax-1" data-rellax-speed="-5">
        {/* Background */}
        <Img src={background} alt="" />
      </div>
      <div className="parallax-2" data-rellax-speed="5">
        {/* Imagen superpuesta */}
        <Imgtwo src={img} alt="Imagen Superpuesta" />
      </div>
    </Cont>
  );
};

export default ParallaxComp;
