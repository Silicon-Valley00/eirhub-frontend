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

function Navigation(props) {
   return (
      <>
         <div className={styles.navbody}>
            <aside className={props.openMenu ? styles.active : ''}>
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
                     <li>
                        <span className={styles.icons}>
                           <i>
                              <MdSpaceDashboard />
                           </i>
                        </span>
                        <h3>Dasboard</h3>
                     </li>
                     <li className={styles.active}>
                        <span className={styles.icons}>
                           <i>
                              <FaUser />
                           </i>
                        </span>
                        <h3>Profile</h3>
                     </li>
                     <li>
                        <span className={styles.icons}>
                           <i>
                              <BsFillFileEarmarkFill />
                           </i>
                        </span>
                        <h3>Records</h3>
                     </li>
                     <li>
                        <span className={styles.icons}>
                           <i>
                              <CgPill />
                           </i>
                        </span>
                        <h3>Medications</h3>
                     </li>

                     <li>
                        <span className={styles.icons}>
                           <i>
                              <TiMessages />
                           </i>
                        </span>
                        <h3>Messages</h3>
                     </li>
                     <li>
                        <span className={styles.icons}>
                           <i>
                              <IoSettingsOutline />
                           </i>
                        </span>
                        <h3>Settings</h3>
                     </li>
                     <li>
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
