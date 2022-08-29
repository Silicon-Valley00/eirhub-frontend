import DSstyles from '../../DoctorDashboard/Schedule/DoctorSchedule.module.css';
import Navigation from '../components/Navigation';
import femaleProfle from '../../../assets/Rectangle.png';
import DoctorPatients from '../DoctorPatients/DoctorPatients';
import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import{BsChevronDown} from 'react-icons/bs'

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

   // endpoint for updating doctor profile
   const endpoint = `http://127.0.0.1:5000/appointments/?id_doctor=${data?.id_doctor}&accepted=false`;
   console.log(endpoint);

   useEffect(() => {
      const updateDoctorProfile = async () => {
         try {
            const response = await axios({
               method: 'GET',
               url: endpoint,
               headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Methods': '*',
               },
               // application: 'application/json',
            });
            console.log(response);
            if (response.status === 200) {
               console.log('GET was successful');
               console.log(response.data.msg);
               return response.data.msg;
            }
         } catch (error) {
            console.log('GET Error', error);
         }
      };
      updateDoctorProfile();
   }, [endpoint]);

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
                  <div className={DSstyles.DSFiles}>
                     <table>
                        <thead>
                           <th className={DSstyles.imgHeader}></th>
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
                           {dataAppoint.msg.map((data, index) => {
                              return (
                                 <tr key={index}>
                                    <td className={DSstyles.imgSection}>
                                       <img
                                          src={data.patient_info.person_image}
                                          alt={'img'}
                                       />
                                    </td>
                                    <td className={DSstyles.nameSection}>
                                       {data.patient_info.first_name}{' '}
                                       {data.patient_info.last_name}{' '}
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
