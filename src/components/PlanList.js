import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const PlanList = ({ plans }) => {
  const [selectedIndex, setIndex] = useState(0);

  return (
    <div id='pricing' className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
      {plans.map((plan, currentIndex) => {
        const { name, price, list, delay } = plan;

        return (
          <div
            onClick={() => setIndex(currentIndex)}
            className='w-full md:max-w-[620px] lg:max-w-[450px] rounded-sm px-4 lg:min-h-[550px]'
            key={currentIndex}  
            data-aos='fade-up'
            data-aos-offset="200"
            data-aos-delay={delay}
          >
            <div className={`${
              currentIndex === selectedIndex
                ? 'bg-neutral-500 text-white'
                : 'bg-neutral-400/10 text-neutral-500'
            } flex flex-col justify-center py-[40px] px-[30px] lg:min-h-[550px] transition duration-100`}>
              {/* Plan Name */}
              <div className='flex flex-col gap-y-8 lg:items-center'>
                
                <div className={`${
                  currentIndex === selectedIndex
                    ? 'bg-white text-neutral-500'
                    : 'bg-neutral-500 text-white'
                } h-[26px] font-primary text-sm font-semibold min-w-min mx-auto px-[14px] flex items-center justify-center mb-8`}>
                  {name}
                </div>

                {/* Plan Price */}
                
                <div className='text-[40px] lg:text-[50px] font-primary font-extrabold text-center flex flex-col items-center justify-center'>
                  <div>
                  <span className='tracking-[0.1px]'>{price}</span>
                  <span className='text-[30px] font-extrabold'> $ </span>
                  <span className='text-sm font-medium'>/month</span>
                </div>
</div>
                {/* List of Features */}
                <ul className='flex flex-col gap-y-4 mb-8'>
                  {list.map((item, idx) => (
                    <li className='flex items-center gap-x-[10px]' key={idx}>
                      <BsCheckCircleFill className='text-lg' />
                      <div>{item.name}</div>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className className={`${
                    currentIndex === selectedIndex
                      ? 'bg-white text-neutral-500'
                      : 'bg-neutral-500 text-white'
                  }    btn btn-lg rounded-[1px] lg:mx-auto `}>
                  Join Team MT
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
