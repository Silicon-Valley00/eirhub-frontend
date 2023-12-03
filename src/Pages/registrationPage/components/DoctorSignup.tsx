import styles from '../styles/signup.module.css';
import signUp from '../../../assets/images/signupimage.svg';
import { Dialog, DialogContent } from '@mui/material';
import SignupForms from '../forms/SignupForms';

function DoctorSignup({
   show,
   handleClose,
}: {
   show: boolean;
   handleClose: () => void;
}) {
   return (
      <Dialog
         open={show}
         onClose={handleClose}
         aria-label={'Patient-sign-up-modal'}
         aria-describedby="A modal with forms for patient sign up"
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
         }}
         maxWidth="xl"
         // fullWidth={fullWidth}
      >
         <DialogContent className={styles.signupContent}>
            <div className={styles.leftRegion}>
               <h3>Eirhub</h3>
               <div className={styles.leftRegionInfoOne}>
                  <p>Sign up and help put smiles on</p>
               </div>

               <div className={styles.leftRegionInfoTwo}>
                  <p> the faces of patients</p>
               </div>
               <div className={styles.leftRegionImage}>
                  <img src={signUp} alt="Sign-up" />
               </div>
            </div>

            <div className={styles.rightRegion}>
               <div className={styles.signupFormTitle}>
                  <h3>Create New Account</h3>
                  <p>Take control of your health today</p>
               </div>
               <SignupForms />
            </div>
         </DialogContent>
      </Dialog>
   );
}

export default DoctorSignup;
