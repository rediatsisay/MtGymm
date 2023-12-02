import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// Import your custom styles
import 'swiper/css';

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={'auto'}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial, idx) => {
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            <div className='relative community-slider-item'>
              <img src={image} alt='' />

              <div className='absolute bottom-5 text-white p-5 text-center'>
                <div className='mb-8 italic text-lg font-light text-black bg-white bg-opacity-75 p-4 rounded'>
                  {message}
                </div>

                <div className='flex items-center justify-center gap-x-3'>
                  <span className='text-3xl text-primary-200 font-bold'>~</span>
                  <div className='text-2xl font-light text-black bg-white bg-opacity-75 p-4 rounded'>{name}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
