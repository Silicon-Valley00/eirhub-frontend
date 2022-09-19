import React from 'react';
import styles from './sidebar.module.css';
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
import { persistor } from '../../../Store/ReducerStore';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../../context/authcontext';
import { useDispatch } from 'react-redux';
import { setPatientAuth } from '../../../Store/Actions';

const Sidebar = (props) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   function logout() {
      try {
         setTimeout(() => persistor.purge(), 200);
         dispatch(setPatientAuth(false));
         Logout();
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
                     <Link to={'/doctorprofile'}>
                        <li
                           className={
                              props.page === 'doctorprofile'
                                 ? styles.active
                                 : ''
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
                     <Link to={'/doctorschedule'}>
                        <li
                           className={
                              props.page === 'doctorschedule'
                                 ? styles.active
                                 : ''
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
                     <Link to={'/doctorrecords'}>
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
                     <Link to={'/doctormessaging'}>
                        <li
                           className={
                              props.page === 'doctormessage'
                                 ? styles.active
                                 : ''
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
                        className={props.page === 'logout' ? styles.active : ''}
                        onClick={() => {
                           props.handleLogoutModal();
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
};
export default Sidebar;
