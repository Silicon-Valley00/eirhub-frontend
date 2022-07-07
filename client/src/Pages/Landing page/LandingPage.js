import React from 'react';
import Footer from './components/Footer';
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
         {/* <Footer /> */}
      </div>
   );
};

export default LandingPage;
