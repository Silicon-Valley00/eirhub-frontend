import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import DoctorPatients from '../DoctorPatients/DoctorPatients';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import avatarOne from '../../../assets/Rectangle-1.png';

const dataAppoint = {
   msg: [
      {
         appointment_date: 'Mon, 21 Nov 2022 00:00:00 GMT',
         appointment_end_time: '13:00:00',
         appointment_location: '',
         appointment_reason: 'Swollen tonsils',
         appointment_start_time: '12:00:00',
         appointment_status: 'pending',
         id_appointment: 4,
         id_doctor: 20,
         id_patient: 34,
         patient_info: {
            first_name: 'Pete',
            last_name: 'Greg',
            middle_name: 'Leta',
            person_image: 'femaleProfle',
         },
      },
      {
         appointment_date: 'Mon, 21 Nov 2022 00:00:00 GMT',
         appointment_end_time: '03:00:00',
         appointment_location: '',
         appointment_reason: 'Eczema',
         appointment_start_time: '01:00:00',
         appointment_status: 'pending',
         idAppointment: 5,
         id_doctor: 20,
         id_patient: 34,
         patient_info: {
            first_name: 'Desmond',
            last_name: 'Jeph',
            middle_name: 'Leta',
            person_image: 'femaleProfle',
         },
      },
   ],
   status: true,
};

const DoctorSchedule = (props) => {
   const data = props.doctorProfile;
   console.log('In the schedule: ', data);

   const [allAppointments, setAllAppointments] = useState([]);
   console.log(allAppointments);

   // endpoint for updating doctor profile
   const baseURL = 'http://127.0.0.1:5000';

   // useEffect(() => {
   //    const getAllAppointmentsForADoctor = async () => {
   //       const getAppointments = async () => {
   //          try {
   //             const response = await axios({
   //                method: 'GET',
   //                url: endpoint,
   //                headers: {
   //                   'Access-Control-Allow-Origin': '*',
   //                   'Access-Control-Allow-Headers': '*',
   //                   'Access-Control-Allow-Methods': '*',
   //                },
   //             });
   //             console.log(response);
   //             const res = response.data.msg;
   //             if (response.status === 200) {
   //                console.log('GET was successful');
   //                if (res.length === 0) {
   //                   console.log('true');
   //                   setAllAppointments(
   //                      allAppointments.push({ nothing: 'Nothing to display' })
   //                   );
   //                }
   //                return response.data.msg;
   //             }
   //          } catch (error) {
   //             console.log('GET Error', error);
   //          }
   //       };
   //       const fetchedAppointments = await getAppointments();
   //       setAllAppointments(fetchedAppointments);
   //    };
   //    getAllAppointmentsForADoctor();
   // }, [endpoint]);

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

   let appointmentsData;
   //displays medications
   if (allAppointments === undefined) {
      appointmentsData = <p>Nothing to show here.</p>;
   } else {
      if (allAppointments.length !== 0) {
         appointmentsData = allAppointments.map((item, j) => {
            return (
               <tr key={`${item.appointment_reason}-${j}`}>
                  <td>
                     <div>
                        <img
                           src={
                              item.doctor_info.person_image
                                 ? item.doctor_info.person_image
                                 : avatarOne
                           }
                           alt="avatar"
                        />
                     </div>
                  </td>
                  <td>{`Dr. ${item.doctor_info.first_name} ${item.doctor_info.last_name}`}</td>
                  <td>Ridge Hospital</td>
                  <td>{item.appointment_reason}</td>
                  <td>{item.appointment_status}</td>
               </tr>
            );
         });
      } else if (allAppointments.length === 0) {
         // Sends message to be displayed when saved videos is empty
         appointmentsData = <p>Nothing to show here.</p>;
      }
   }

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
                           <th className={DSstyles.tName}>Name</th>
                           <th className={DSstyles.tCondition}>Condition</th>
                           <th className={DSstyles.tAction}>Action</th>
                        </thead>
                        <tbody>
                           {allAppointments.map((data, index) => {
                              return (
                                 <tr key={index}>
                                    <td>
                                       <img
                                          src={data?.patient_info.person_image}
                                          alt={'img'}
                                       />
                                    </td>
                                    <td>
                                       {data?.patient_info.first_name}{' '}
                                       {data?.patient_info.last_name}{' '}
                                    </td>
                                    <td>
                                       Swollen tonsils with severe pains in
                                       throat and chest
                                    </td>
                                    <td
                                       style={{
                                          color: '#EC6464',
                                          cursor: 'pointer',
                                       }}
                                       onClick=""
                                    >
                                       Cancel
                                    </td>
                                 </tr>
                              );
                           })}
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
};

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

export default connect(mapStateToProps)(DoctorSchedule);
