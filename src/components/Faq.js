import React from 'react';
import { faq } from '../data';
import Accordion from './Accordion';

const Faq = () => {
  const { icon, title, accordions } = faq;

  return (
    <section id='faq' className='bg-caramel section lg:pt-[280]'>
      <div className='max-w-[750px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
        <div      className='section-title-group justify-start lg:justify-center -space-x4 lg:max-w-[540px] mx-auto px-4 lg:px-0'>
          <img className='lg:hidden' src={icon} alt='' />
          <h2 className='h2 section-title lg:mt-[100px] text-4xl font-bold leading-tight text-center text-primary-800'>
            {title} <span className='text-primary-200'>.</span>
          </h2>
        </div>

        <div className='mt-8 space-y-6'>
          {accordions.map((accordion, idx) => (
            <Accordion accordion={accordion} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
