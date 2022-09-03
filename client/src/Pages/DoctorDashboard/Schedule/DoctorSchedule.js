import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import DoctorPatients from '../DoctorPatients/DoctorPatients';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import avatarOne from '../../../assets/Rectangle-1.png';
import Sidebar from '../components/Sidebar';

const DoctorSchedule = (props) => {
   const data = props.doctorProfile;

   // States that would be used as data for the PUT method
   const [allAppointments, setAllAppointments] = useState([]);
   const [selectedAppointment, setSelectedAppointment] = useState([]);
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
         axios
            .get(
               `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&accepted=false`,
               {
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               }
            )
            .then((res) => {
               setAllAppointments(res.data.msg);
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

   const displaySelectedPatientDetails = (patientKeyNum) => {
      const selectedPatient = allAppointments[patientKeyNum];
      setSelectedAppointment(selectedPatient);
   };

   // let appointmentsData;
   // //displays medications
   // if (allAppointments === undefined) {
   //    appointmentsData = <p>Nothing to show here.</p>;
   // } else {
   //    if (allAppointments.length !== 0) {
   //       allAppointments.map((data, index) => {
   //          return (
   // <tr key={index}>
   //    <td className={DSstyles.imgSection}>
   //       <img src={data?.patient_info.person_image} alt={'img'} />
   //    </td>
   //    <td>
   //       {data?.patient_info.first_name} {data?.patient_info.last_name}{' '}
   //    </td>
   //    <td className={DSstyles.tdCondition}>
   //       Swollen tonsils with severe pains in throat and chest
   //    </td>
   //    <td
   //       style={{
   //          color: '#EC6464',
   //          cursor: 'pointer',
   //       }}
   //       onClick=""
   //    >
   //       Cancel
   //    </td>
   // </tr>;
   //          );
   //       });
   //    } else if (allAppointments.length === 0) {
   //       // Sends message to be displayed when saved videos is empty
   //       appointmentsData = <p>Nothing to show here.</p>;
   //    }
   // }

   return (
      <>
         <Navigation />
         <div className={DSstyles.wrapper}>
            <div className={DSstyles.DSContainer}>
               <Sidebar indicator={3} />
               <div className={DSstyles.DSContainer1}>
                  <h2>Apppoinment Details</h2>
                  <form>
                     <div className={DSstyles.patientContainer}>
                        <label className={DSstyles.labelName}>
                           Patient Name
                        </label>
                        <input
                           type="message"
                           id="name"
                           className={DSstyles.inputName}
                           value={selectedAppointment?.patient_info?.first_name}
                           disabled
                        />
                        <label className={DSstyles.labelCondition}>
                           Condition
                        </label>
                        <input
                           type="text"
                           id="condition"
                           className={DSstyles.inputCondition}
                           value={selectedAppointment?.appointment_reason}
                           disabled
                        />
                     </div>
                     <div className={DSstyles.appointTime}>
                        <label className={DSstyles.labelDate}>
                           Appointment Date
                        </label>
                        <input
                           type="text"
                           id="date"
                           placeholder="DD/MM/YYYY"
                           onFocus={(e) => (e.target.type = 'date')}
                           onBlur={(e) => (e.target.type = 'text')}
                           className={DSstyles.inputDate}
                           onChange={(e) => setAppointmentDate(e.target.value)}
                        />
                        <label className={DSstyles.labelSTime}>
                           Start Time
                        </label>
                        <input
                           type="text"
                           id="start time"
                           placeholder="HH:MM:SS"
                           onFocus={(e) => (e.target.type = 'time')}
                           onBlur={(e) => (e.target.type = 'text')}
                           className={DSstyles.inputStartTime}
                           onChange={(e) =>
                              setAppointmentStartTime(e.target.value)
                           }
                        />
                        <label className={DSstyles.labelETime}>End Time</label>
                        <input
                           type="text"
                           id="end time"
                           placeholder="HH:MM:SS"
                           onFocus={(e) => (e.target.type = 'time')}
                           onBlur={(e) => (e.target.type = 'text')}
                           className={DSstyles.inputEndTime}
                           onChange={(e) =>
                              setAppointmentEndTime(e.target.value)
                           }
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
                     <div className={DSstyles.DSFiles}>
                        <table>
                           <thead>
                              <th className={DSstyles.imgHeader}></th>
                              <th className={DSstyles.tName}>Name</th>
                              <th className={DSstyles.tCondition}>Condition</th>
                              <th className={DSstyles.tAction}>Action</th>
                           </thead>
                           <tbody>
                              {allAppointments.map((data, index) => {
                                 return (
                                    <tr key={index}>
                                       <td
                                          className={DSstyles.imgSection}
                                          onClick={() =>
                                             displaySelectedPatientDetails(
                                                index
                                             )
                                          }
                                       >
                                          <img
                                             src={
                                                data?.patient_info.person_image
                                             }
                                             alt={'img'}
                                          />
                                       </td>
                                       <td
                                          onClick={() =>
                                             displaySelectedPatientDetails(
                                                index
                                             )
                                          }
                                          className={DSstyles.tdName}
                                       >
                                          {data?.patient_info.first_name}{' '}
                                          {data?.patient_info.last_name}{' '}
                                       </td>
                                       <td
                                          className={DSstyles.tdCondition}
                                          onClick={() =>
                                             displaySelectedPatientDetails(
                                                index
                                             )
                                          }
                                       >
                                          Swollen tonsils with severe pains in
                                          throat and chest
                                       </td>
                                       <td
                                          className={DSstyles.tdCancel}
                                          onClick=""
                                       >
                                          Cancel
                                       </td>
                                    </tr>
                                 );
                              })}
                              {/*Dummy Texts*/}
                              {/* <tr>
                              <td className={DSstyles.imgSection}>
                                 <img src={avatarOne} alt={'img'} />
                              </td>
                              <td className={DSstyles.tdName}>Ama Osaba</td>
                              <td className={DSstyles.tdCondition}>
                                 Swollen tonsils with severe pains in throat and
                                 chest
                              </td>
                              <td className={DSstyles.tdCancel} onClick="">
                                 Cancel
                              </td>
                           </tr> */}
                              {/*Dummy text End */}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div className={DSstyles.DSpatientContainer}>
                  <DoctorPatients show />
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
