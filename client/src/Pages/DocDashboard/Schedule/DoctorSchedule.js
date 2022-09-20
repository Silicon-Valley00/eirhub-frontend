import DSstyles from './DoctorSchedule.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const DoctorSchedule = (props) => {
   const data = props.doctorProfile;

   // BUG: Make doctor not able to make schedules when fields are empty.
   // BUG: Refresh the page after making a schedule.
   // FIXME: Refresh the page after deleting a schedule.
   // FIXME: Don't display the details of the schedule when the doctor clicks on cancel.

   // States that would be used as data for the PUT method
   const [allPendingAppointments, setAllPendingAppointments] = useState([]);
   console.log('Pending appointments: ', allPendingAppointments);
   const [selectedAppointment, setSelectedAppointment] = useState([]);
   console.log(selectedAppointment);
   const [appointment_date, setAppointmentDate] = useState('');
   const [appointment_start_time, setAppointmentStartTime] = useState('');
   const [appointment_end_time, setAppointmentEndTime] = useState('');

   // Data to be sent over to the backend
   let scheduledAppointment = {
      appointment_date,
      appointment_end_time,
      appointment_reason: selectedAppointment?.appointment_reason,
      appointment_start_time,
      appointment_status: 'Pending',
      appointment_location: selectedAppointment?.appointment_location,
      id_doctor: selectedAppointment?.id_doctor,
      id_patient: selectedAppointment?.id_patient,
   };

   // endpoint for updating doctor profile
   const baseURL = 'http://127.0.0.1:5000';

   // Function to get all pending appointment.
   useEffect(() => {
      const getAllAppointmentsForADoctor = async () => {
         await axios
            .get(
               `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&status=Pending`,
               {
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               }
            )
            .then((res) => {
               setAllPendingAppointments(res.data.msg);
            })
            .catch((err) => {
               console.log(err.message);
            });
      };
      getAllAppointmentsForADoctor();
   }, []);

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
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
            }
         )

         .then(() => console.log('successul put'))
         .catch((error) => console.log(error));
   };

   // Function to cancel an appointment
   const cancelAppointment = async (index) => {
      // console.log(selectedAppointment.id_appointment);
      await axios
         .put(
            `${baseURL}/appointments/?id_appointment=${selectedAppointment?.id_appointment}`,
            {
               ...scheduledAppointment,
               appointment_status: 'Declined',
               appointment_date: '2021-06-01',
               appointment_start_time: '10:00:00',
               appointment_end_time: '11:00:00',
            },
            {
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
            }
         )
         // Filter out the appointment that was cancelled
         .then(() =>
            setAllPendingAppointments(
               allPendingAppointments.filter((_, i) => i !== index)
            )
         )
         .catch((error) => console.log(error));
   };

   // Function to display the details of the appointment that was clicked.
   const displaySelectedPatientDetails = (patientKeyNum) => {
      console.log('patient: ', patientKeyNum);
      const selectedPatient = allPendingAppointments[patientKeyNum];
      setSelectedAppointment(selectedPatient);
   };

   // Handles whether to display a text or display the actual data
   let displayData;
   // Displays a text if there are no Pending appointments
   if (allPendingAppointments.length === 0) {
      displayData = (
         <div className={DSstyles.emptyMessage}>
            <p className={DSstyles.text}>Nothing to show here.</p>
         </div>
      );
      // If there are pending appointments, display the data
   } else {
      displayData = (
         <>
            {allPendingAppointments.map((data, index) => {
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
                        {data?.patient_info.first_name}
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
                           displaySelectedPatientDetails(index);
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

   return (
      <>
         <div className={DSstyles.DSContainer1}>
            <h2>Apppoinment Details</h2>
            <form>
               <div className={DSstyles.patientContainer}>
                  <label className={DSstyles.labelName}>Patient Name</label>
                  <input
                     type="message"
                     id="name"
                     className={DSstyles.inputName}
                     value={selectedAppointment?.patient_info?.first_name}
                     disabled
                  />
                  <label className={DSstyles.labelCondition}>Condition</label>
                  <input
                     type="text"
                     id="condition"
                     className={DSstyles.inputCondition}
                     value={selectedAppointment?.appointment_reason}
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
                     className={DSstyles.DSbutton}
                     onClick={() => scheduleAppointment()}
                  >
                     Schedule Appointment
                  </button>
               </div>
            </form>
            <h2 className={DSstyles.DSh21}>Pending Appointments</h2>
            <div className={DSstyles.appointmentContainer}>
               {/* BUG: Can't scroll all details. */}
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
   };
};

export default connect(mapStateToProps)(DoctorSchedule);
