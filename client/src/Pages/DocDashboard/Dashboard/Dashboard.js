import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgCalendar } from 'react-icons/cg';
import { connect } from 'react-redux';
import axios from 'axios';

function MidDashboard(props) {
   const [getacceptedAppointment, setAcceptedAppointment] = useState([]);
   console.log(getacceptedAppointment);

   // States to keep the counts of the number of patients, reports and appointments
   const [numOfPatients, setNumOfPatients] = useState(0);
   const [numOfReports, setNumOfReports] = useState(0);
   const [numOfAppointments, setNumOfAppointments] = useState(0);

   const data = props.doctorProfile;
   const baseURL = 'http://127.0.0.1:5000';

   // endpoint for updating doctor profile
   // const accepted_appointment_endpoint = `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&accepted=true`;
   // const numberOfPatients_endpoint = `${baseURL}/doctors/patient/?id_doctor=${data?.id_doctor}`;
   // const numberOfRecords_endpoint = `${baseURL}/doctors/reports/?id_doctor=${data?.id_doctor}`;
   // const numberOfAppointments_endpoint = `${baseURL}/doctors/appointments/?id_doctor=${data?.id_doctor}`;

   const endpoints = [
      `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&accepted=true`,
      `${baseURL}/doctors/appointments/?id_doctor=${data?.id_doctor}`,
      `${baseURL}/doctors/reports/?id_doctor=${data?.id_doctor}`,
      `${baseURL}/doctors/appointments/?id_doctor=${data?.id_doctor}`,
   ];

   // TODO: add interceptors to catch errors
   useEffect(() => {
      const fetchAcceptedAppointments = async () => {
         axios
            .get(
               `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&accepted=true`,
               {
                  headers: {
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Headers': '*',
                     'Access-Control-Allow-Methods': '*',
                  },
               }
            )
            .then((res) => {
               setAcceptedAppointment(res.data.msg);
            })
            .catch((err) => {
               console.log(err.message);
            });
      };
      fetchAcceptedAppointments();
   }, []);

   // Fetch all the data from the endpoints at once.
   // useEffect(() => {
   //    axios
   //       .all(
   //          [
   //             axios.get(
   //                `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&accepted=true`
   //             ),
   //             axios.get(
   //                `${baseURL}/doctors/patients/?id_doctor=${data?.id_doctor}`
   //             ),
   //             axios.get(
   //                `${baseURL}/doctors/reports/?id_doctor=${data?.id_doctor}`
   //             ),
   //             axios.get(
   //                `${baseURL}/doctors/appointments/?id_doctor=${data?.id_doctor}`
   //             ),
   //          ],
   //          {
   //             headers: {
   //                'Access-Control-Allow-Origin': '*',
   //                'Access-Control-Allow-Headers': '*',
   //                'Access-Control-Allow-Methods': '*',
   //             },
   //          }
   //       )
   //       .then(
   //          axios.spread(
   //             (upcomingAppointments, patients, reports, appointments) => {
   //                setAcceptedAppointment(upcomingAppointments);
   //                setNumOfAppointments(appointments);
   //                setNumOfPatients(patients);
   //                setNumOfRecords(reports);
   //             }
   //          )
   //       )
   //       .catch((err) => {
   //          console.log(err.message);
   //       });
   // }, []);

   return (
      <>
         <div className={styles.wrapper}>
            <main className={styles.main}>
               <section className={styles.section}>
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
                        <h1 className={styles.heading}>
                           Upcoming appointments
                        </h1>
                        {/* Table for upcoming appointment */}
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
                                 {getacceptedAppointment.map((data, index) => {
                                    return (
                                       <>
                                          <tr key={index}>
                                             <td>
                                                <img
                                                   src={
                                                      data?.patient_info
                                                         .person_image
                                                   }
                                                   alt=""
                                                   className={styles.table_img}
                                                />
                                             </td>
                                             {/* FIXME: Space name */}
                                             <td>
                                                {`${data?.patient_info.first_name} ${data?.patient_info.last_name}`}
                                             </td>
                                             <td>{data?.appointment_reason}</td>
                                             <td>
                                                {new Date(
                                                   data?.appointment_date
                                                ).getMonth() + 1}
                                                /
                                                {new Date(
                                                   data?.appointment_date
                                                ).getDate() + 1}
                                                /
                                                {new Date(
                                                   data?.appointment_date
                                                ).getFullYear()}
                                             </td>
                                             <td>
                                                {data?.appointment_start_time}
                                             </td>
                                          </tr>
                                       </>
                                    );
                                 })}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </>
   );
}

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

export default connect(mapStateToProps)(MidDashboard);