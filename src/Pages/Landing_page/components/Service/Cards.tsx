import styles from './services.module.css';

const Cards = ({
   detail,
}: {
   detail: {
      name: string;
      profession: string;
      profile_pic: string;
   };
}) => {
   return (
      <div
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500"
         className={styles.card}
      >
         <div className={styles.img}>
            <img src={detail.profile_pic} alt="Doctor" />
         </div>
         <div className={styles.services_doctor_info}>
            <h4 className={styles.services_doctor_info_h4}>{detail.name}</h4>
            <p className={styles.services_doctor_info_p}>{detail.profession}</p>
         </div>
      </div>
   );
};

export default Cards;
