import React from 'react';
import { about } from '../data';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const About = () => {
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section   id='about' className='bg-green-100 py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className='container mx-auto'>

        <div className='section-title-group justify-start' data-aos='fade-down' data-aos-delay='100'>
          <img src={icon} alt='Icon' />
          <h2 className='h2 section-title'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>

        <p className=' h6 md-text-body-md mb-12 mt-4' data-aos='fade-down' data-aos-delay='200'>
          {subtitle1}
        </p>

        <p className='md-text-body-md mb-8 text-blue-500' data-aos='fade-down' data-aos-delay='300'>
          {subtitle2}
        </p>

        <br />

        <div data-aos='fade-down' data-aos-delay='400'>
          <a className='link flex items-center gap-x-4 hover:gap-x-6 transition-all' href='link flex'>
            {link}
            <IoIosArrowDroprightCircle />
          </a>
        </div>
        
        {/* Additional styling element */}
       

      </div>
    </section>
  );
};

export default About;
