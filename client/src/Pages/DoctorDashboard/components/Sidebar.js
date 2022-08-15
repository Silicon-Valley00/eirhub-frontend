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
      highlight: 13,
   },
   {
      icon: <FaUser />,
      title: 'profile',
      to: '/doctorprofile',
      highlight: 12,
   },
   {
      icon: <TbCalendarTime />,
      title: 'Schedule',
      to: '/doctorschedule',
      highlight: 14,
   },
   {
      icon: <AiFillFile />,
      title: 'record',
      to: '/doctorrecord',
      highlight: 15,
   },
   {
      icon: <TiMessages />,
      title: 'messages',
      to: '/doctormessages',
      highlight: 16,
   },
];

const Sidebar = ({ indicator }) => {
   const [show, setShow] = useState(false);

   const showSidebar = () => {
      setShow(!show);
   };

   return (
      <>
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
               <GrClose className={styles.close} onClick={showSidebar} />
            </div>

            {/* links */}
            <nav className={styles.nav}>
               <div className={styles.upper_links}>
                  {links.map((item, index) => {
                     return (
                        <Link
                           to={item.to}
                           className={
                              `${indicator}` === `${item.highlight}`
                                 ? `${styles.link} ${styles.active}`
                                 : `${styles.link}`
                           }
                           key={index}
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
