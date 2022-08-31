import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import DoctorPatients from '../DoctorPatients/DoctorPatients';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import avatarOne from '../../../assets/Rectangle-1.png';

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

   // let appointmentsData;
   // //displays medications
   // if (allAppointments === undefined) {
   //    appointmentsData = <p>Nothing to show here.</p>;
   // } else {
   //    if (allAppointments.length !== 0) {
   //       appointmentsData = allAppointments.map((item, j) => {
   //          return (
   //             <tr key={`${item.appointment_reason}-${j}`}>
   //                <td>
   //                   <div>
   //                      <img
   //                         src={
   //                            item.patient_info.person_image
   //                               ? item.patient_info.person_image
   //                               : avatarOne
   //                         }
   //                         alt="avatar"
   //                      />
   //                   </div>
   //                </td>
   //                <td>{`Dr. ${item.doctor_info.first_name} ${item.doctor_info.last_name}`}</td>
   //                <td>Ridge Hospital</td>
   //                <td>{item.appointment_reason}</td>
   //                <td>{item.appointment_status}</td>
   //             </tr>
   //          );
   //       });
   //    } else if (allAppointments.length === 0) {
   //       // Sends message to be displayed when saved videos is empty
   //       appointmentsData = <p>Nothing to show here.</p>;
   //    }
   // }

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
                        type="text"
                        id="date"
                        placeholder="DD/MM/YYYY"
                        onFocus={(e) => (e.target.type = 'date')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className={DSstyles.inputDate}
                     />
                     <label className={DSstyles.labelSTime}>Start Time</label>
                     <input
                        type="text"
                        id="start time"
                        placeholder="HH:MM:SS"
                        onFocus={(e) => (e.target.type = 'time')}
                        onBlur={(e) => (e.target.type = 'text')}
                        className={DSstyles.inputStartTime}
                     />
                     <label className={DSstyles.labelETime}>End Time</label>
                     <input
                        type="text"
                        id="end time"
                        placeholder="HH:MM:SS"
                        onFocus={(e) => (e.target.type = 'time')}
                        onBlur={(e) => (e.target.type = 'text')}
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
                     <table>
                        <thead>
                           <th className={DSstyles.imgHeader}></th>
                           <th className={DSstyles.tName}>Name</th>
                           <th className={DSstyles.tCondition}>Condition</th>
                           <th className={DSstyles.tAction}>Action</th>
                        </thead>
                        <tbody>
                           {allAppointments  .map((data, index) => {
                              return (
                                 <tr key={index}>
                                    <td className={DSstyles.imgSection}>
                                       <img
                                          src={data?.patient_info.person_image}
                                          alt={'img'}
                                       />
                                    </td>
                                    <td>
                                       {data?.patient_info.first_name}{' '}
                                       {data?.patient_info.last_name}{' '}
                                    </td>
                                    <td className={DSstyles.tdCondition}>
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
            <div className={DSstyles.DSpatientContainer}>
               <DoctorPatients show />
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
