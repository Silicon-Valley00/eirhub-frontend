import Styles from './services.module.css';

const Cards = ({ detail }) => {
   return (
      <div
         data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500"
         className={Styles.card}
      >
         {/* BUG: Images are well positioned in the middle. */}
         <div className={Styles.img}>
            <img src={detail.profile_pic} alt="Doctor" />
         </div>
         <div className={Styles.services_doctor_info}>
            <h4 className={Styles.services_doctor_info_h4}>{detail.name}</h4>
            <p className={Styles.services_doctor_info_p}>{detail.profession}</p>
         </div>
      </div>
   );
};

export default Cards;
