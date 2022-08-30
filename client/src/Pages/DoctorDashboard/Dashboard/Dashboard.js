import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import DoctorCalendar from '../components/Calendar';
import styles from './dashboard.module.css';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgCalendar } from 'react-icons/cg';
import appointImg from '../../../assets/maleDoctor.jpg';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

function MidDashboard(props) {
   const [getacceptedAppointment, setAcceptedAppointment] = useState([]);

   console.log('dash: ', getacceptedAppointment);
   const data = props.doctorProfile;
   // endpoint for updating doctor profile
   const endpoint = `http://127.0.0.1:5000/appointments/?id_doctor=${data?.id_doctor}&accepted=true`;
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
            if (response.status === 200) {
               console.log('GET was successful');
               console.log(response.data.msg);
               return response.data.msg;
            }
            setAcceptedAppointment(response.data.msg);
         } catch (error) {
            console.log('GET Error', error);
         }
      };
      updateDoctorProfile();
   }, [endpoint]);

   return (
      <>
         <Navigation nav={13} />
         <main className={styles.main}>
            <div className={styles.middle_section}>
               {/* box that containst the summary display for the doctor */}
               <div className={styles.doctor_display}>
                  {/* Each display make into a card and joined together on large screens */}
                  <div className={styles.card} id={styles.first_card}>
                     <IoIosPeople className={styles.icon} />
                     <div>
                        <p className={styles.digits}>132</p>
                        <p className={styles.text}>Patients</p>
                     </div>
                  </div>
                  <div className={styles.card} id={styles.second_card}>
                     <AiFillFile className={styles.icon} />
                     <div>
                        <p className={styles.digits}>114</p>
                        <p className={styles.text}>records</p>
                     </div>
                  </div>
                  <div className={styles.card} id={styles.third_card}>
                     <CgCalendar className={styles.icon} />
                     <div>
                        <p className={styles.digits}>132</p>
                        <p className={styles.text}>appointments</p>
                     </div>
                  </div>
               </div>
               {/* End of summary display */}

               {/* div for upcoming appointment */}
               <div className={styles.appointmentsBox}>
                  <h1 className={styles.heading}>Upcoming appointments</h1>
                  <div className={styles.appointmentTable}>
                     <table>
                        <thead>
                           <th></th>
                           <th>Name</th>
                           <th>Condition</th>
                           <th>Date</th>
                           <th>Time</th>
                        </thead>
                        <tbody>
                           {/* {getacceptedAppointment.map((data, index) => {
                              return <></>;
                           })} */}
                           <tr>
                              <td>
                                 <img
                                    src={appointImg}
                                    alt=""
                                    className={styles.table_img}
                                 />
                              </td>
                              <td>Melisa</td>
                              <td>Appendicitis</td>
                              <td>07/12/21</td>
                              <td>2:00pm</td>
                           </tr>
                           <tr>
                              <td>
                                 <img
                                    src={appointImg}
                                    alt=""
                                    className={styles.table_img}
                                 />
                              </td>
                              <td>Melisa</td>
                              <td>Appendicitis</td>
                              <td>07/12/21</td>
                              <td>2:00pm</td>
                           </tr>
                           <tr>
                              <td>
                                 <img
                                    src={appointImg}
                                    alt=""
                                    className={styles.table_img}
                                 />
                              </td>
                              <td>Melisa</td>
                              <td>Appendicitis</td>
                              <td>07/12/21</td>
                              <td>2:00pm</td>
                           </tr>
                           <tr>
                              <td>
                                 <img
                                    src={appointImg}
                                    alt=""
                                    className={styles.table_img}
                                 />
                              </td>
                              <td>Melisa</td>
                              <td>Appendicitis</td>
                              <td>07/12/21</td>
                              <td>2:00pm</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div className={styles.right_pane}>
               <DoctorCalendar />
            </div>
         </main>
      </>
   );
}
export default connect(mapStateToProps)(MidDashboard);
