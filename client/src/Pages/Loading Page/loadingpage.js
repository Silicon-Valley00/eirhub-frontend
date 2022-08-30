import React from 'react';
import styles from './loading.module.css';
import spinner from '../../assets/loading-gif.gif';
function Loading() {
   return (
      <>
         <main>
            <div className={styles.homeloadingbg}>
               <div className={styles.loadingspinner}>
                  <img src={spinner} alt="" />
               </div>
            </div>
         </main>
      </>
   );
}
export default Loading;
