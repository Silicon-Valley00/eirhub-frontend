import styles from './DoctorSchedule.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import store from '../../../Store/ReducerStore';
import { setMessage } from '../../../Store/Actions';

const DoctorSchedule = (props) => {
   const data = props.doctorProfile;

   // States that would be used as data for the PUT method
   const [allPendingAppointments, setAllPendingAppointments] = useState([]);
   const [selectedAppointment, setSelectedAppointment] = useState([]);
   const [appointment_date, setAppointmentDate] = useState('');
   const [appointment_start_time, setAppointmentStartTime] = useState('');
   const [appointment_end_time, setAppointmentEndTime] = useState('');

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

   // endpoint for updating doctor profile
   const baseURL = 'https://eirhub-backend.herokuapp.com';
   const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
   };

   const getAllAppointmentsForADoctor = async () => {
      await axios
         .get(
            `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&status=Pending`,
            {
               headers: headers,
            }
         )
         .then((res) => {
            setAllPendingAppointments(res.data.msg);
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   // Function to get all pending appointment.
   useEffect(() => {
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
               headers,
            }
         )

         .then(() => {
            // store.dispatch((data.id_doctor));
            getAllAppointmentsForADoctor();
            store.dispatch(
               setMessage({
                  show: true,
                  msg: 'Appointment scheduled',
                  state: 1,
               })
            );
         })
         .catch((error) =>
            store.dispatch(
               setMessage({ show: true, msg: 'Scheduling Failed', state: 0 })
            )
         );
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
         .then(() => {
            setAllPendingAppointments(
               allPendingAppointments.filter((_, i) => i !== index)
            );
            getAllAppointmentsForADoctor();
         })
         .catch((error) =>
            store.dispatch(
               setMessage({ show: true, msg: 'Failed to cancel', state: 0 })
            )
         );
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

   // if (allPendingSchedules.length === 0) {
   //       displayData = (
   //          <div className={styles.emptyMessage}>
   //             <p className={styles.text}>Nothing to show here.</p>
   //          </div>
   //       );

   //    } else {
   //       displayData = (
   //          <>
   //             {allPendingSchedules.map((data, index) => {
   //                return (
   //                   <tr key={index}>
   //                      <td
   //                         className={styles.imgSection}
   //                         onClick={() => displaySelectedPatientDetails(index)}
   //                      >
   //                         <div className={styles.profileImageDiv}>
   //                            <img
   //                               src={data?.patient_info.person_image}
   //                               alt={'img'}
   //                               className={styles.profileImage}
   //                            />
   //                         </div>
   //                      </td>
   //                      <td
   //                         onClick={() => displaySelectedPatientDetails(index)}
   //                         className={styles.tdName}
   //                      >
   //                         {data?.patient_info.first_name}{' '}
   //                         {data?.patient_info.last_name}
   //                      </td>
   //                      <td
   //                         className={styles.tdCondition}
   //                         onClick={() => displaySelectedPatientDetails(index)}
   //                      >
   //                         {data?.appointment_reason}
   //                      </td>
   //                      {/* Cancel appointments */}
   //                      <td
   //                         className={styles.tdCancel}
   //                         onClick={() => {
   //                            // displaySelectedPatientDetails(index);
   //                            cancelAppointment(index);
   //                         }}
   //                      >
   //                         Cancel
   //                      </td>
   //                   </tr>
   //                );
   //             })}
   //          </>
   //       );
   //    }

   if (allPendingAppointments.length === 0) {
      displayData = (
         <div className={styles.emptyMessage}>
            <p className={styles.text}>Nothing to show here.</p>
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
                        className={styles.imgSection}
                        onClick={() => displaySelectedPatientDetails(index)}
                     >
                        <div className={styles.profileImageDiv}>
                           <img
                              src={data?.patient_info.person_image}
                              alt={'img'}
                              className={styles.profileImage}
                           />
                        </div>
                     </td>
                     <td
                        onClick={() => displaySelectedPatientDetails(index)}
                        className={styles.tdName}
                     >
                        {data?.patient_info.first_name}{' '}
                        {data?.patient_info.last_name}
                     </td>
                     <td
                        className={styles.tdCondition}
                        onClick={() => displaySelectedPatientDetails(index)}
                     >
                        {data?.appointment_reason}
                     </td>
                     {/* Cancel appointments */}
                     <td
                        className={styles.tdCancel}
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
         <div className={styles.DSContainer1}>
            <div className={styles.formContainer}>
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
                  <div className={styles.patientContainer}>
                     <label className={styles.labelName}>Patient Name</label>
                     <input
                        type="message"
                        id="name"
                        className={styles.inputName}
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
                     <label className={styles.labelCondition}>Condition</label>
                     <input
                        type="text"
                        id="condition"
                        className={styles.inputCondition}
                        value={
                           displayReason === undefined || displayReason === null
                              ? ' '
                              : displayReason
                        }
                        disabled
                     />
                  </div>
                  <div className={styles.appointTime}>
                     <label className={styles.labelDate}>
                        Appointment Date
                     </label>
                     <input
                        type="text"
                        id="date"
                        placeholder="DD/MM/YYYY"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className={styles.inputDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                     />
                     <label className={styles.labelSTime}>Start Time</label>
                     <input
                        type="text"
                        id="start time"
                        placeholder="HH:MM"
                        onFocus={(e) => (e.target.type = 'time')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className={styles.inputStartTime}
                        onChange={(e) =>
                           setAppointmentStartTime(e.target.value)
                        }
                        required
                     />
                     <label className={styles.labelETime}>End Time</label>
                     <input
                        type="text"
                        id="end time"
                        placeholder="HH:MM"
                        onFocus={(e) => (e.target.type = 'time')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className={styles.inputEndTime}
                        onChange={(e) => setAppointmentEndTime(e.target.value)}
                        required
                     />
                  </div>
                  <div className={styles.DSbuttondiv}>
                     <button
                        form="form"
                        type="submit"
                        className={styles.DSbutton}
                        onClick={() => scheduleAppointment()}
                     >
                        Schedule Appointment
                     </button>
                  </div>
               </form>
            </div>
            <div>
               <h2 className={styles.DSh21}>Pending Appointments</h2>
               <div className={styles.appointmentContainer}>
                  <table>
                     <thead>
                        <th className={styles.imgHeader}></th>
                        <th className={styles.tName}>Name</th>
                        <th className={styles.tCondition}>Condition</th>
                        <th className={styles.tAction}>Action</th>
                     </thead>
                     {/* Body of the table that contains all the Pending appointments */}
                     <tbody className={styles.tbody}>{displayData}</tbody>
                  </table>
               </div>
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

// import styles from './DoctorSchedule.module.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { connect, useDispatch } from 'react-redux';
// import { getAllPendingAppointmentsForADoctor } from '../../../Store/DoctorAction';
// import { Helmet } from 'react-helmet';
// import { setMessage } from '../../../Store/Actions';

// const DoctorSchedule = (props) => {
//    const data = props.doctorProfile;
//    const allPendingSchedules = props.allPendingAppointments;
//    const baseURL = 'https://eirhub-backend.herokuapp.com';
//    const headers = {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Headers': '*',
//       'Access-Control-Allow-Methods': '*',
//    };

//    // States that would be used as data for the PUT method
//    const [allPendingAppointments, setAllPendingAppointments] = useState([]);
//    const [selectedAppointment, setSelectedAppointment] = useState([]);
//    const [appointment_date, setAppointmentDate] = useState('');
//    const [appointment_start_time, setAppointmentStartTime] = useState('');
//    const [appointment_end_time, setAppointmentEndTime] = useState('');

//    const dispatch = useDispatch();

//    useEffect(() => {
//       setAllPendingAppointments(allPendingSchedules);
//       // dispatch(getAllPendingAppointmentsForADoctor(data.doctor_id));
//    }, []);

//    // Data to be sent over to the backend
//    let scheduledAppointment = {
//       appointment_date,
//       appointment_end_time,
//       appointment_start_time,
//       appointment_status: 'Pending',
//       appointment_location: selectedAppointment?.appointment_location,
//       id_doctor: selectedAppointment?.id_doctor,
//       id_patient: selectedAppointment?.id_patient,
//       appointment_reason: selectedAppointment?.appointment_reason,
//    };

//    // endpoint for updating doctor profile

//    // Function that sends the data to the server
//    const scheduleAppointment = async () => {
//       await axios
//          .put(
//             `${baseURL}/appointments/?id_appointment=${selectedAppointment?.id_appointment}`,
//             {
//                ...scheduledAppointment,
//                appointment_status: 'Accepted',
//             },
//             {
//                headers,
//             }
//          )
//          .then(() => {
//             dispatch(getAllPendingAppointmentsForADoctor(data.id_doctor));
//             dispatch(
//                setMessage({
//                   show: true,
//                   msg: 'Appointment scheduled',
//                   state: 1,
//                })
//             );
//          })
//          .catch((error) =>
//             dispatch(
//                setMessage({ show: true, msg: 'Scheduling Failed', state: 0 })
//             )
//          );
//    };

//    // Function to cancel an appointment
//    const cancelAppointment = async (index) => {
//       const indexedAppointment = allPendingAppointments[index];
//       await axios
//          .put(
//             `${baseURL}/appointments/?id_appointment=${indexedAppointment.id_appointment}`,
//             {
//                ...scheduledAppointment,
//                appointment_status: 'Declined',
//                appointment_date: '2021-06-01',
//                appointment_start_time: '10:00:00',
//                appointment_end_time: '11:00:00',
//                appointment_location: indexedAppointment.appointment_location,
//                id_doctor: indexedAppointment?.id_doctor,
//                id_patient: indexedAppointment.id_patient,
//                appointment_reason: indexedAppointment.appointment_reason,
//             },
//             {
//                headers,
//             }
//          )
//          // Filter out the appointment that was cancelled
//          .then(() => {
//             dispatch(getAllPendingAppointmentsForADoctor(data.id_doctor));
//             dispatch(
//                setMessage({
//                   show: true,
//                   msg: 'Scheduling Successful',
//                   state: 1,
//                })
//             );
//          })
//          .catch((error) =>
//             dispatch(
//                setMessage({
//                   show: true,
//                   msg: 'Scheduling failed',
//                   state: 0,
//                })
//             )
//          );
//    };

//    // Function to display the details of the appointment that was clicked.
//    const displaySelectedPatientDetails = (patientKeyNum) => {
//       const selectedPatient = allPendingSchedules[patientKeyNum];
//       setSelectedAppointment(selectedPatient);
//    };

//    // Handles whether to display a text or display the actual data
//    let displayData;
//    // Displays a text if there are no Pending appointments
//    if (allPendingSchedules.length === 0) {
//       displayData = (
//          <div className={styles.emptyMessage}>
//             <p className={styles.text}>Nothing to show here.</p>
//          </div>
//       );
//       // If there are pending appointments, display the data
//    } else {
//       displayData = (
//          <>
//             {allPendingSchedules.map((data, index) => {
//                return (
//                   <tr key={index}>
//                      <td
//                         className={styles.imgSection}
//                         onClick={() => displaySelectedPatientDetails(index)}
//                      >
//                         <div className={styles.profileImageDiv}>
//                            <img
//                               src={data?.patient_info.person_image}
//                               alt={'img'}
//                               className={styles.profileImage}
//                            />
//                         </div>
//                      </td>
//                      <td
//                         onClick={() => displaySelectedPatientDetails(index)}
//                         className={styles.tdName}
//                      >
//                         {data?.patient_info.first_name}{' '}
//                         {data?.patient_info.last_name}
//                      </td>
//                      <td
//                         className={styles.tdCondition}
//                         onClick={() => displaySelectedPatientDetails(index)}
//                      >
//                         {data?.appointment_reason}
//                      </td>
//                      {/* Cancel appointments */}
//                      <td
//                         className={styles.tdCancel}
//                         onClick={() => {
//                            // displaySelectedPatientDetails(index);
//                            cancelAppointment(index);
//                         }}
//                      >
//                         Cancel
//                      </td>
//                   </tr>
//                );
//             })}
//          </>
//       );
//    }

//    let displayFirstName = selectedAppointment?.patient_info?.first_name;
//    let displayLastName = selectedAppointment?.patient_info?.last_name;
//    let displayFullName = displayFirstName + ' ' + displayLastName;
//    let displayReason = selectedAppointment?.appointment_reason;

//    return (
//       <>
//          <Helmet>
//             <title>Schedule An Appointment</title>
//             <meta name="description" description="Doctor Schedule" />
//          </Helmet>
//          <div className={styles.DSContainer1}>
//             <div className={styles.formContainer}>
//                <h2>Appoinment Details</h2>
//                <form
//                   onSubmit={(e) => {
//                      e.preventDefault();
//                      // clear the form
//                      e.target.reset();
//                      displayFullName = '';
//                      displayReason = '';
//                   }}
//                   id="form"
//                >
//                   <div className={styles.patientContainer}>
//                      <label className={styles.labelName}>Patient Name</label>
//                      <input
//                         type="message"
//                         id="name"
//                         className={styles.inputName}
//                         value={
//                            displayFirstName === undefined ||
//                            displayFirstName === null ||
//                            displayLastName === undefined ||
//                            displayLastName === null
//                               ? ' '
//                               : displayFullName
//                         }
//                         disabled
//                      />
//                      <label className={styles.labelCondition}>Condition</label>
//                      <input
//                         type="text"
//                         id="condition"
//                         className={styles.inputCondition}
//                         value={
//                            displayReason === undefined || displayReason === null
//                               ? ' '
//                               : displayReason
//                         }
//                         disabled
//                      />
//                   </div>
//                   <div className={styles.appointTime}>
//                      <label className={styles.labelDate}>
//                         Appointment Date
//                      </label>
//                      <input
//                         type="text"
//                         id="date"
//                         placeholder="DD/MM/YYYY"
//                         onFocus={(e) => (e.target.type = 'date')}
//                         onBlur={(e) => (e.target.type = 'text')}
//                         className={styles.inputDate}
//                         onChange={(e) => setAppointmentDate(e.target.value)}
//                         required
//                      />
//                      <label className={styles.labelSTime}>Start Time</label>
//                      <input
//                         type="text"
//                         id="start time"
//                         placeholder="HH:MM"
//                         onFocus={(e) => (e.target.type = 'time')}
//                         onBlur={(e) => (e.target.type = 'text')}
//                         className={styles.inputStartTime}
//                         onChange={(e) =>
//                            setAppointmentStartTime(e.target.value)
//                         }
//                         required
//                      />
//                      <label className={styles.labelETime}>End Time</label>
//                      <input
//                         type="text"
//                         id="end time"
//                         placeholder="HH:MM"
//                         onFocus={(e) => (e.target.type = 'time')}
//                         onBlur={(e) => (e.target.type = 'text')}
//                         className={styles.inputEndTime}
//                         onChange={(e) => setAppointmentEndTime(e.target.value)}
//                         required
//                      />
//                   </div>
//                   <div className={styles.DSbuttondiv}>
//                      <button
//                         form="form"
//                         type="submit"
//                         className={styles.DSbutton}
//                         onClick={() => scheduleAppointment()}
//                      >
//                         Schedule Appointment
//                      </button>
//                   </div>
//                </form>
//             </div>
//             <div>
//                <h2 className={styles.DSh21}>Pending Appointments</h2>
//                <div className={styles.appointmentContainer}>
//                   <table>
//                      <thead>
//                         <th className={styles.imgHeader}></th>
//                         <th className={styles.tName}>Name</th>
//                         <th className={styles.tCondition}>Condition</th>
//                         <th className={styles.tAction}>Action</th>
//                      </thead>
//                      {/* Body of the table that contains all the Pending appointments */}
//                      <tbody className={styles.tbody}>{displayData}</tbody>
//                   </table>
//                </div>
//             </div>
//          </div>
//       </>
//    );
// };

// const mapStateToProps = (state) => {
//    return {
//       doctorProfile: state.doctorProfile,
//       allPendingAppointments: state.allPendingAppointments,
//    };
// };

// export default connect(mapStateToProps)(DoctorSchedule);
