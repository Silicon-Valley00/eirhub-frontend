import React from 'react';
import styles from './quickSolution.module.css';

const items = [
   {
      icon: '',
      heading: 'Find a Doctor',
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia soluta sunt voluptates!',
   },
   {
      icon: '',
      heading: 'Find a Doctor',
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia soluta sunt voluptates!',
   },
   {
      icon: '',
      heading: 'Find a Doctor',
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia soluta sunt voluptates!',
   },
];
const QuickSolution = () => {
   return (
      <main className={styles.main}>
         <div className={styles.title}>
            <p>a quick solution for</p>
            <p>scheduling with a doctor</p>
         </div>

         <div className={styles.cards}>
            {React.Children.toArray(
               items.map((item) => {
                  return (
                     <div className={styles.card}>
                        <div className={styles.icon}>
                           <img src={item.profile_pic} alt="Icon" />
                        </div>
                        <div className={styles.info}>
                           <h4>{item.name}</h4>
                           <p>{item.profession}</p>
                        </div>
                        <p>Learn more </p>
                     </div>
                  );
               })
            )}
         </div>
      </main>
   );
};

export default QuickSolution;
