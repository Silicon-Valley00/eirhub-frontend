import styles from './sidebar.module.css';
import { TiMessages } from 'react-icons/ti';
import { ImExit } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { TbCalendarTime } from 'react-icons/tb';
import { MdMenu, MdSpaceDashboard } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillFile } from 'react-icons/ai';

const links = [
   {
      icon: <MdSpaceDashboard />,
      title: 'dashboard',
      to: '/doctordashboard',
   },
   {
      icon: <FaUser />,
      title: 'profile',
      to: '/doctorprofile',
   },
   {
      icon: <TbCalendarTime />,
      title: 'Schedule',
      to: '/doctorschedule',
   },
   {
      icon: <AiFillFile />,
      title: 'record',
      to: '/doctorrecord',
   },
   {
      icon: <TiMessages />,
      title: 'messages',
      to: '/doctormessages',
   },
];

const Sidebar = () => {
   const [show, setShow] = useState(false);
   const [selected, showSelected] = useState(0);

   return (
      <>
         {/* REVIEW: add active link to link. */}
         <MdMenu
            color="#05a6c2"
            className={styles.menu}
            onClick={() => setShow(!show)}
         />
         <main
            className={`${
               show
                  ? `${styles.main} `
                  : ` ${styles.hide_sidebar} ${styles.main}`
            }`}
         >
            {/* logo with close button */}
            <div className={styles.logo_close}>
               <p className={styles.logo}>Eirhub</p>
               <GrClose
                  className={styles.close}
                  onClick={() => setShow(!show)}
               />
            </div>

            {/* links */}
            <nav className={styles.nav}>
               <div className={styles.upper_links}>
                  {links.map((item, index) => {
                     return (
                        // BUG: active styling
                        <Link
                           to={item.to}
                           className={
                              selected === index
                                 ? `${styles.link} ${styles.active}`
                                 : `${styles.link}`
                           }
                           key={index}
                           onClick={() => showSelected(index)}
                        >
                           <div className={styles.icon}>{item.icon}</div>
                           <p className={styles.title}>{item.title}</p>
                        </Link>
                     );
                  })}
               </div>

               {/* logout button */}
               <Link to="/logout" className={styles.link}>
                  <ImExit className={styles.icon} />
                  <p className={styles.title}>Logout</p>
               </Link>
            </nav>
         </main>
      </>
   );
};

export default Sidebar;
