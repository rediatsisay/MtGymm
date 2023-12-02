import React from 'react';
import { footer } from '../data';

const Footer = () => {
  const { logo, copyrightText } = footer;

  return (
    <footer className='bg-neutral-500 md:h-[50px] px-[20px]'>
      <div
        className='container mx-auto h-full flex flex-col md:flex-row justify-between items-center md:items-end md:pb-[50px]'
        data-aos='fade-up'
        data-aos-delay='200'
      >
        <a href='#'>
          <img src={logo} alt='' />
        </a>
        <p className='text-white'>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
