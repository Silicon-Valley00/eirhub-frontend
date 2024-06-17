import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
