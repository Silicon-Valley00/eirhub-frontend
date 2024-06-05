import styles from './hero.module.css';
import Typewriter from 'typewriter-effect';
import landingpageImage from '../../../assets/landingPage/landingpage.png';

const Hero = () => {
   return (
      <section id={styles.hero_body}>
         <div id={styles.overlay}></div>
         <div className={styles.hero_container}>
            <div className={styles.hero_wrapper}>
               <div className={styles.hero_content}>
                  <div className={styles.content_title}>
                     <h1 className={styles.content__title}>
                        Let's Help Connect You With The Best Doctors
                     </h1>
                  </div>
                  <div className={styles.content_wrapper}>
                     <div className={styles.content_info}>
                        <p className={styles.content__info}>
                           <Typewriter
                              options={{ loop: false, delay: 20 }}
                              onInit={(typewriter) => {
                                 typewriter
                                    .pauseFor(500)
                                    .typeString('EirHub helps patients')
                                    .pauseFor(300)
                                    .deleteChars(8)
                                    .typeString(
                                       ' <Strong>patients</Strong> get quick access to experienced practitioners and helps increase the visibility of these practitioners'
                                    )
                                    .deleteChars(14)
                                    .typeString(
                                       ' <Strong>practitioners</Strong>'
                                    )
                                    .start();
                              }}
                           />
                        </p>
                     </div>
                  </div>

                  <div className={styles.content_button}>
                     <button
                        className={styles.content__button}
                        // onClick={() => props.handleModalSignup()}
                     >
                        Book an appointment
                     </button>
                  </div>
               </div>
               <div className={styles.hero_image}>
                  <img
                     src={landingpageImage}
                     alt="Hero"
                     className={styles.hero__image}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
