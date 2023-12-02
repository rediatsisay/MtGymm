import React, { useState } from 'react';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { question, answer } = accordion;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='cursor-pointer'>
      <div className={`bg-white border rounded-sm ${isOpen ? 'bg-light-brown' : ''}`}>
        <div className='min-h-[60px] flex items-center justify-between px-[30px]' onClick={toggleAccordion}>
          <div className='h6'>{question}</div>
          {isOpen ? <FaChevronCircleUp className='text-dark-toggle' /> : <FaChevronCircleDown className='text-dark-toggle' />}
        </div>
        {isOpen && (
          <div className='p-[20px]'>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
