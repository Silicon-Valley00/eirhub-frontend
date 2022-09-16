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
import { persistor } from '../../../Store/ReducerStore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDoctorAuth } from '../../../Store/DoctorAction';
import { Logout } from '../../../context/authcontext';

const links = [
   {
      icon: <MdSpaceDashboard />,
      title: 'dashboard',
      to: '/doctordashboard',
      highlight: 1,
   },
   {
      icon: <FaUser />,
      title: 'profile',
      to: '/doctorprofile',
      highlight: 2,
   },
   {
      icon: <TbCalendarTime />,
      title: 'Schedule',
      to: '/doctorschedule',
      highlight: 3,
   },
   {
      icon: <AiFillFile />,
      title: 'record',
      to: '/doctorrecords',
      highlight: 4,
   },
   {
      icon: <TiMessages />,
      title: 'messages',
      to: '/doctormessages',
      highlight: 5,
   },
];

const Sidebar = ({ indicator }) => {
   const [show, setShow] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const showSidebar = () => {
      setShow(!show);
   };

   function logout() {
      try {
         setTimeout(() => persistor.purge(), 200);
         Logout();

         dispatch(setDoctorAuth(false));
         navigate('/landing-page');
      } catch (err) {
         console.log(err);
      }
   }

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
               <div
                  className={styles.link}
                  onClick={() => {
                     logout();
                  }}
               >
                  <ImExit className={styles.icon} />
                  <p className={styles.title}>Logout</p>
               </div>
            </nav>
         </main>
      </>
   );
};

export default Sidebar;
