import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Faq from './components/Faq';
import Join from './components/Join';
import Footer from './components/Footer';

Aos.init({
  duration: 2500,
  delay: 400,
});

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
