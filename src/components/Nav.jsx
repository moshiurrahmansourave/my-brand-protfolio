
import { useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);

  const scrollToSection = (id, btn) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      setActiveButton(btn);
    }
  };

  return (
    <nav className='fixed top-2 lg:top-4 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-4 flex justify-between items-center text-2xl text-white/50'>
          <Link onClick={() => scrollToSection('home', 'homeBtn')} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeButton === 'homeBtn' ? 'active' : ''}`}>
            <BiHomeAlt />
          </Link>
          <Link onClick={() => scrollToSection('about', 'aboutBtn')} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeButton === 'aboutBtn' ? 'active' : ''}`}>
            <BiUser />
          </Link>
          <Link onClick={() => scrollToSection('services', 'servicesBtn')} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeButton === 'servicesBtn' ? 'active' : ''}`}>
            <BsClipboardData />
          </Link>
          <Link onClick={() => scrollToSection('work', 'workBtn')} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeButton === 'workBtn' ? 'active' : ''}`}>
            <BsBriefcase />
          </Link>
          <Link onClick={() => scrollToSection('contact', 'contactBtn')} className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${activeButton === 'contactBtn' ? 'active' : ''}`}>
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
