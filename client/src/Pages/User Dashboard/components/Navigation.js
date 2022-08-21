import React from 'react';
import styles from './navigation.module.css';
import { GrClose } from 'react-icons/gr';
import { MdSpaceDashboard } from 'react-icons/md';
import { BsFillFileEarmarkFill } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import { ImExit } from 'react-icons/im';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { CgPill } from 'react-icons/cg';
import { TbCalendarTime } from 'react-icons/tb';
import { GiLabCoat } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
   const navigate = useNavigate();

   function logout() {
      try {
         setTimeout(() => persistStore.purge(), 200);
         navigate('/landing-page');
      } catch (err) {
         console.log(err);
      }
   }
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
                  <ul>
                     <Link to={'/userdashboard'}>
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
                     <Link to={'/userprofile'}>
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
                     <Link to={'/reports'}>
                        <li
                           className={
                              props.page === 'records' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <BsFillFileEarmarkFill />
                              </i>
                           </span>
                           <h3>Reports</h3>
                        </li>
                     </Link>
                     <Link to={'/prescriptions'}>
                        <li
                           className={
                              props.page === 'medications' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <CgPill />
                              </i>
                           </span>
                           <h3>Prescriptions</h3>
                        </li>
                     </Link>
                     <Link to={'/scheduling'}>
                        <li
                           className={
                              props.page === 'schedule' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <TbCalendarTime />
                              </i>
                           </span>
                           <h3>Schedule</h3>
                        </li>
                     </Link>
                     <Link to={'/find-a-doctor'}>
                        <li
                           className={
                              props.page === 'finddoctor' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <GiLabCoat />
                              </i>
                           </span>
                           <h3>Find a Doctor</h3>
                        </li>
                     </Link>
                     <Link to={'/usermessaging'}>
                        <li
                           className={
                              props.page === 'message' ? styles.active : ''
                           }
                        >
                           <span className={styles.icons}>
                              <i>
                                 <TiMessages />
                              </i>
                           </span>
                           <h3>Messages</h3>
                        </li>
                     </Link>
                     <li
                        className={
                           props.page === 'settings' ? styles.active : ''
                        }
                     >
                        <span className={styles.icons}>
                           <i>
                              <IoSettingsOutline />
                           </i>
                        </span>
                        <h3>Settings</h3>
                     </li>
                     <li
                        className={props.page === 'logout' ? styles.active : ''}
                        onClick={() => {
                           logout();
                        }}
                     >
                        <span className={styles.icons}>
                           <i>
                              <ImExit />
                           </i>
                        </span>
                        <h3>Logout</h3>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
      </>
   );
}
export default Navigation;
