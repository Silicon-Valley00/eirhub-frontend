import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import maleProfle from '../../../assets/Rectangle-1.png';
import femaleProfle from '../../../assets/Rectangle.png';
import DoctorPatients from '../DoctorPatients/DoctorPatients';

export default function DoctorSchedule(props) {
   return (
      <>
         <Navigation nav={14} />
         <div className={DSstyles.DSContainer}>
            <div className={DSstyles.DSContainer1}>
               <h2>Apppoinment Details</h2>
               <form>
                  <div className={DSstyles.patientContainer}>
                     <label className={DSstyles.labelName}>Patient Name</label>
                     <input
                        type="message"
                        id="name"
                        className={DSstyles.inputName}
                     />
                     <label className={DSstyles.labelCondition}>
                        Condition
                     </label>
                     <input
                        type="message"
                        id="condition"
                        className={DSstyles.inputCondition}
                     />
                  </div>
                  <div className={DSstyles.appointTime}>
                     <label className={DSstyles.labelDate}>
                        Appointment Date
                     </label>
                     <input
                        type="date"
                        id="date"
                        className={DSstyles.inputDate}
                        placeholder="DD/MM/YYYY"
                     />
                     <label className={DSstyles.labelSTime}>Start Time</label>
                     <input
                        type="time"
                        id="start time"
                        className={DSstyles.inputStartTime}
                     />
                     <label className={DSstyles.labelETime}>End Time</label>
                     <input
                        type="time"
                        id="end time"
                        className={DSstyles.inputEndTime}
                     />
                  </div>
                  <div className={DSstyles.DSbuttondiv}>
                     <button className={DSstyles.DSbutton}>
                        Schedule Appointment
                     </button>
                  </div>
               </form>
               <h2 className={DSstyles.DSh21}>Pending Appointments</h2>
               <div className={DSstyles.appointmentContainer}>
                  <div className={DSstyles.DSFiles}>
                     <table>
                        <thead>
                           <th></th>
                           <th className={DSstyles.tName}>Name</th>
                           <th className={DSstyles.tCondition}>Condition</th>
                           <th className={DSstyles.tAction}>Action</th>
                        </thead>
                        <tbody>
                           <td className={DSstyles.imgSection}>
                              <img src={femaleProfle} alt="profile img"></img>
                           </td>
                           <td className={DSstyles.nameSection}>
                              Melissa Burkinstock{' '}
                           </td>
                           <td className={DSstyles.tdCondition}>
                              Swollen tonsils with severe pains in throat and
                              chest
                           </td>
                           <td
                              style={{ color: '#EC6464', cursor: 'pointer' }}
                              className={DSstyles.tdAction}
                           >
                              Cancel
                           </td>
                           <tr></tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className={DSstyles.DSpatientContainer}>
               <DoctorPatients />
            </div>
         </div>
      </>
   );
}
