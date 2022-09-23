import DSstyles from './DoctorSchedule.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getAllPendingAppointmentsForADoctor } from '../../../Store/DoctorAction';
import { Helmet } from 'react-helmet';

const DoctorSchedule = (props) => {
   const data = props.doctorProfile;
   const allPendingSchedules = props.allPendingAppointments;
   const baseURL = 'http://127.0.0.1:5000';
   const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
   };

   // FIXME: Refresh the page after deleting a schedule.
   // FIXME: Don't display the details of the schedule when the doctor clicks on cancel.

   // States that would be used as data for the PUT method
   const [allPendingAppointments, setAllPendingAppointments] = useState([]);
   console.log('states', allPendingAppointments);
   const [selectedAppointment, setSelectedAppointment] = useState([]);
   console.log('selected one', selectedAppointment);
   const [appointment_date, setAppointmentDate] = useState('');
   const [appointment_start_time, setAppointmentStartTime] = useState('');
   const [appointment_end_time, setAppointmentEndTime] = useState('');

   const dispatch = useDispatch();

   useEffect(() => {
      setAllPendingAppointments(allPendingSchedules);
   }, []);

   // Data to be sent over to the backend
   let scheduledAppointment = {
      appointment_date,
      appointment_end_time,
      appointment_start_time,
      appointment_status: 'Pending',
      appointment_location: selectedAppointment?.appointment_location,
      id_doctor: selectedAppointment?.id_doctor,
      id_patient: selectedAppointment?.id_patient,
      appointment_reason: selectedAppointment?.appointment_reason,
   };
   console.log('scheduled one', scheduledAppointment);

   // endpoint for updating doctor profile

   // Function that sends the data to the server
   const scheduleAppointment = async () => {
      await axios
         .put(
            `${baseURL}/appointments/?id_appointment=${selectedAppointment?.id_appointment}`,
            {
               ...scheduledAppointment,
               appointment_status: 'Accepted',
            },
            {
               headers,
            }
         )
         .then(() => {
            dispatch(getAllPendingAppointmentsForADoctor(data.id_doctor));
            console.log('dispatched');
         })
         .catch((error) => console.log(error));
   };

   // Function to cancel an appointment
   const cancelAppointment = async (index) => {
      // console.log(selectedAppointment.id_appointment);
      var indexedAppointment = allPendingAppointments[index];
      // alert(selectedId)
      await axios
         .put(
            `${baseURL}/appointments/?id_appointment=${indexedAppointment.id_appointment}`,
            {
               ...scheduledAppointment,
               appointment_status: 'Declined',
               appointment_date: '2021-06-01',
               appointment_start_time: '10:00:00',
               appointment_end_time: '11:00:00',
               appointment_location: indexedAppointment.appointment_location,
               id_doctor: indexedAppointment?.id_doctor,
               id_patient: indexedAppointment.id_patient,
               appointment_reason: indexedAppointment.appointment_reason,
            },
            {
               headers,
            }
         )
         // Filter out the appointment that was cancelled
         .then(() =>
            dispatch(getAllPendingAppointmentsForADoctor(data.id_doctor))
         )
         .catch((error) => console.log(error));
   };

   // Function to display the details of the appointment that was clicked.
   const displaySelectedPatientDetails = (patientKeyNum) => {
      console.log('patient: ', patientKeyNum);
      const selectedPatient = allPendingSchedules[patientKeyNum];
      setSelectedAppointment(selectedPatient);
   };

   // Handles whether to display a text or display the actual data
   let displayData;
   // Displays a text if there are no Pending appointments
   if (allPendingSchedules.length === 0) {
      displayData = (
         <div className={DSstyles.emptyMessage}>
            <p className={DSstyles.text}>Nothing to show here.</p>
         </div>
      );
      // If there are pending appointments, display the data
   } else {
      displayData = (
         <>
            {allPendingSchedules.map((data, index) => {
               return (
                  <tr key={index}>
                     <td
                        className={DSstyles.imgSection}
                        onClick={() => displaySelectedPatientDetails(index)}
                     >
                        <div className={DSstyles.profileImageDiv}>
                           <img
                              src={data?.patient_info.person_image}
                              alt={'img'}
                           />
                        </div>
                     </td>
                     <td
                        onClick={() => displaySelectedPatientDetails(index)}
                        className={DSstyles.tdName}
                     >
                        {data?.patient_info.first_name}{' '}
                        {data?.patient_info.last_name}
                     </td>
                     <td
                        className={DSstyles.tdCondition}
                        onClick={() => displaySelectedPatientDetails(index)}
                     >
                        {data?.appointment_reason}
                     </td>
                     {/* Cancel appointments */}
                     <td
                        className={DSstyles.tdCancel}
                        onClick={() => {
                           // displaySelectedPatientDetails(index);
                           cancelAppointment(index);
                        }}
                     >
                        Cancel
                     </td>
                  </tr>
               );
            })}
         </>
      );
   }

   let displayFirstName = selectedAppointment?.patient_info?.first_name;
   let displayLastName = selectedAppointment?.patient_info?.last_name;
   let displayFullName = displayFirstName + ' ' + displayLastName;
   let displayReason = selectedAppointment?.appointment_reason;

   return (
      <>
         <Helmet>
            <title>Schedule An Appointment</title>
            <meta name="description" description="Doctor Schedule" />
         </Helmet>
         <div className={DSstyles.DSContainer1}>
            <h2>Appoinment Details</h2>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  // clear the form
                  e.target.reset();
                  displayFullName = '';
                  displayReason = '';
               }}
               id="form"
            >
               <div className={DSstyles.patientContainer}>
                  <label className={DSstyles.labelName}>Patient Name</label>
                  <input
                     type="message"
                     id="name"
                     className={DSstyles.inputName}
                     value={
                        displayFirstName === undefined ||
                        displayFirstName === null ||
                        displayLastName === undefined ||
                        displayLastName === null
                           ? ' '
                           : displayFullName
                     }
                     disabled
                  />
                  <label className={DSstyles.labelCondition}>Condition</label>
                  <input
                     type="text"
                     id="condition"
                     className={DSstyles.inputCondition}
                     value={
                        displayReason === undefined || displayReason === null
                           ? ' '
                           : displayReason
                     }
                     disabled
                  />
               </div>
               <div className={DSstyles.appointTime}>
                  <label className={DSstyles.labelDate}>Appointment Date</label>
                  <input
                     type="text"
                     id="date"
                     placeholder="DD/MM/YYYY"
                     onFocus={(e) => (e.target.type = 'date')}
                     onBlur={(e) => (e.target.type = 'text')}
                     className={DSstyles.inputDate}
                     onChange={(e) => setAppointmentDate(e.target.value)}
                     required
                  />
                  <label className={DSstyles.labelSTime}>Start Time</label>
                  <input
                     type="text"
                     id="start time"
                     placeholder="HH:MM"
                     onFocus={(e) => (e.target.type = 'time')}
                     onBlur={(e) => (e.target.type = 'text')}
                     className={DSstyles.inputStartTime}
                     onChange={(e) => setAppointmentStartTime(e.target.value)}
                     required
                  />
                  <label className={DSstyles.labelETime}>End Time</label>
                  <input
                     type="text"
                     id="end time"
                     placeholder="HH:MM"
                     onFocus={(e) => (e.target.type = 'time')}
                     onBlur={(e) => (e.target.type = 'text')}
                     className={DSstyles.inputEndTime}
                     onChange={(e) => setAppointmentEndTime(e.target.value)}
                     required
                  />
               </div>
               <div className={DSstyles.DSbuttondiv}>
                  <button
                     form="form"
                     type="submit"
                     className={DSstyles.DSbutton}
                     onClick={() => scheduleAppointment()}
                  >
                     Schedule Appointment
                  </button>
               </div>
            </form>
            <h2 className={DSstyles.DSh21}>Pending Appointments</h2>
            <div className={DSstyles.appointmentContainer}>
               <table>
                  <thead>
                     <th className={DSstyles.imgHeader}></th>
                     <th className={DSstyles.tName}>Name</th>
                     <th className={DSstyles.tCondition}>Condition</th>
                     <th className={DSstyles.tAction}>Action</th>
                  </thead>
                  {/* Body of the table that contains all the Pending appointments */}
                  <tbody className={DSstyles.tbody}>{displayData}</tbody>
               </table>
            </div>
         </div>
      </>
   );
};

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
      allPendingAppointments: state.allPendingAppointments,
   };
};

export default connect(mapStateToProps)(DoctorSchedule);
