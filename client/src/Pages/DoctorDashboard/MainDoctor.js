import React from 'react';
import Sidebar from './components/Sidebar';
import style from './MainDoctor.module.css';

const MainDoctor = ({ middleSection }) => {
   return (
      <div className={style.main}>
         <Sidebar />
         {/* {middleSection} */}
      </div>
   );
};

export default MainDoctor;
