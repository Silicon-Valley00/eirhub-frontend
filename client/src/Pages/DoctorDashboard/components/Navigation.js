import React from 'react';
import styles from './navigation.module.css';
import { GrClose } from 'react-icons/gr';
import { MdSpaceDashboard } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { ImExit } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';
import { TbCalendarTime } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Navigation(props) {
   return (
      <>
         <div className={styles.navbody}>
            <aside
               className={props.openMenu ? styles.active : styles.notActive}
            >
               <div className={styles.top}>
                  <div className={styles.logo}>
                     <h2>Eirhub</h2>
                  </div>
                  <div className={styles.close} id={styles.closeBtn}>
                     <i
                        onClick={() => {
                           props.setOpenMenu(false);
                        }}
                     >
                        <GrClose />
                     </i>
                  </div>
               </div>
               <div className={styles.sidebar}>
                  {/* list of all navigation */}
                  <ul>
                     {/* for dashboard */}
                     <Link to={'/doctordashboard'}>
                        <li
                           className={
                              props.page === 'dashboard' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <MdSpaceDashboard />
                              </i>
                           </span>
                           <h3>Dasboard</h3>
                        </li>
                     </Link>
                     {/* for profile */}
                     <Link to={'/doctorprofile'}>
                        <li
                           className={
                              props.page === 'profile' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <FaUser />
                              </i>
                           </span>
                           <h3>Profile</h3>
                        </li>
                     </Link>
                     {/* for schedule */}
                     <li
                        className={
                           props.page === 'scheduler' ? styles.active : ''
                        }
                     >
                        <span className={styles.icons}>
                           <i>
                              <TbCalendarTime />
                           </i>
                        </span>
                        <h3>Schedule</h3>
                     </li>
                     {/* for messages */}
                     <li
                        className={
                           props.page === 'messages' ? styles.active : ''
                        }
                     >
                        <span className={styles.icons}>
                           <i>
                              <TiMessages />
                           </i>
                        </span>
                        <h3>Messages</h3>
                     </li>
                     {/* for logout */}
                     <li
                        className={props.page === 'logout' ? styles.active : ''}
                     >
                        <span className={styles.icons}>
                           <i>
                              <ImExit />
                           </i>
                        </span>
                        <h3>Logout</h3>
                     </li>
                  </ul>
                  {/* end of navigation */}
               </div>
            </aside>
         </div>
      </>
   );
}
export default Navigation;
