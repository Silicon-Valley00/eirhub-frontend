import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

const LandingPage = () => {
   return (
      <div>
         <Navbar />
         <Hero />
         {/* <Services /> */}
      </div>
   );
};

export default LandingPage;
