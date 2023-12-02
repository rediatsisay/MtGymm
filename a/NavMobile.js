import React, { useState, useEffect } from 'react';
import { header } from '../src/data';
import Nav from '../src/components/Nav';
import NavMobile from './NavMobile';
import { RiCloseFill, RiMenu4Fill } from 'react-icons/ri'; // Import the necessary icons

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavMobileActive, setIsNavMobileActive] = useState(false);

  const { logo } = header;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled ? 'bg-black text-white' : 'bg-transparent text-black'
      } fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 lg:px-8 py-4">
        {/* Logo */}
        <a href="">
          <img src={logo} alt="" className="h-8 w-auto" />
        </a>

        {/* Navigation */}
        <Nav />

        {/* Mobile Navigation Toggle */}
        <div
          onClick={() => setIsNavMobileActive(!isNavMobileActive)}
          className="lg:hidden cursor-pointer"
        >
          {isNavMobileActive ? (
            <RiCloseFill className="text-primary-200 text-3xl" />
          ) : (
            <RiMenu4Fill className="text-primary-200 text-3xl" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <NavMobile NavMobile={isNavMobileActive} />
    </header>
  );
};

export default Header;
