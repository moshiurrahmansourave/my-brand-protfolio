import './banner.css';
import Typed from 'typed.js';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../public/animation/bannerAnimation.json';

const Banner = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);
  const el = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
    return () => {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>HTML and Css</i>', 'ReactJs with MongoDb', 'Join Us For More'],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/17lk7I86Ru2I9o3jcKwZZ-vqTjjCclNtC/view?usp=sharing');
  };

  return (
    <div id='banner'>
      <section className='home lg:flex-row flex-col-reverse'>
        <div className='home-container text-center'>
          <h3 className='py-2'>Hello, I'm</h3>
          <h1 className='py-4'>Moshiur Rahman</h1>
          <h3><span ref={el}></span></h3>
          <p>Meet other Ama users like you. Get answers <br /> & discover new ways to use Ama !</p>
          <div className='home-sci'>
            <a href='https://www.facebook.com/moshiurshak.mosheur?mibextid=gik2fB' target='_blank' rel='noopener noreferrer'><FaFacebookF /></a>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
          </div>
          <div>
            <button onClick={handleDownload} id='btn-style'>Download CV</button>
          </div>
        </div>
        <div className='lg:w-[500px]'>
          <div ref={animationContainer} />
        </div>
      </section>
    </div>
  );
};

export default Banner;
