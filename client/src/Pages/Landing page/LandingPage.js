import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import QuickSolution from './components/QuickSolution';
import Services from './components/Services';

const LandingPage = () => {
   return (
      <div>
         <Navbar />
         <Hero />
         <QuickSolution />
         <Services />
      </div>
   );
};

export default LandingPage;
