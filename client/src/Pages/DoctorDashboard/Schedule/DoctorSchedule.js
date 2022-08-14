import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';

const patients = [
   {
      name: 'Melissa Burkinstock',
   },
   {
      name: 'James Freeman',
   },
   {
      name: 'Chioma Ukechukwu',
   },
   {
      name: 'Melissa Burkinstock',
   },
   {
      name: 'Melissa Burkinstock',
   },
];

export default function DoctorSchedule(props) {
   return (
      <>
         <Navigation />
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
                  <button className={DSstyles.DSbutton}>
                     Schedule Appointment
                  </button>
               </form>
               <h2 className={DSstyles.DSh21}>Pending Appointments</h2>
               <div className={DSstyles.appointmentContainer}>
                  <table>
                     <thead>
                        <th className={DSstyles.tName}>Name</th>
                        <th className={DSstyles.tCondition}>Condition</th>
                        <th className={DSstyles.tAction}>Action</th>
                     </thead>
                     <tbody>
                        <td>{patients[0].name}</td>
                        <td>
                           Swollen tonsils with severe pains in throat and chest
                        </td>
                        <td>Cancel</td>
                     </tbody>
                  </table>
               </div>
            </div>
            <div className={DSstyles.DSContainer2}>
               <h2>Patients</h2>
               <ul>
                  {patients.map((patientnames) => {
                     return (
                        <>
                           <li>{patientnames.name}</li>
                        </>
                     );
                  })}
               </ul>
            </div>
         </div>
      </>
   );
}
