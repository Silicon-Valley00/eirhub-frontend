import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';
import { IoIosPeople } from 'react-icons/io';
import { AiFillFile } from 'react-icons/ai';
import { CgCalendar } from 'react-icons/cg';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAppointmentDates, setMessage } from '../../../Store/Actions';
import { Helmet } from 'react-helmet';

const MidDashboard = (props) => {
   const [getacceptedAppointment, setAcceptedAppointment] = useState([]);
   const dispatch = useDispatch();

   // States to keep the counts of the number of patients, reports and appointments
   const [numOfdetails, setNumberofdetails] = useState(0);
   const data = props.doctorProfile;
   console.log('data', data);
   const baseURL = 'http://127.0.0.1:5000';

   // TODO: add interceptors to catch errors
   const currDate = new Date();
   const currMonth = currDate.getMonth() + 1;
   const currYear = currDate.getFullYear();
   const currDay = currDate.getDate();

   const fetchAcceptedAppointments = async () => {
      await axios
         .get(
            `${baseURL}/appointments/?id_doctor=${data?.id_doctor}&status=Accepted`,
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
            dispatch(
               setMessage({
                  show: true,
                  msg: 'Unable to fetch Appointment, please make sure you are connected.',
                  state: 0,
               })
            );
         });
   };

   const fetchStats = async () => {
      await axios
         .get(`${baseURL}/doctors/stats/?id_doctor=${data?.id_doctor}`, {
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': '*',
               'Access-Control-Allow-Methods': '*',
            },
         })
         .then((res) => {
            setNumberofdetails(res.data.msg);
         })
         .catch((err) => {
            dispatch(
               setMessage({
                  show: true,
                  msg: "Couldn't fetch stats. Make Sure you are connected.",
                  state: 0,
               })
            );
         });
   };

   useEffect(() => {
      const fetchDashboardData = async () => {
         await fetchAcceptedAppointments();
         await fetchStats();
      };
      fetchDashboardData();
   }, []);

   let appointment_dates = [];
   useEffect(() => {
      if (getacceptedAppointment === undefined) return;
      if (
         getacceptedAppointment !== undefined ||
         getacceptedAppointment !== null ||
         getacceptedAppointment.length !== 0
      ) {
         for (let item of getacceptedAppointment) {
            if (
               new Date().getTime() <= new Date(item.appointment_date).getTime()
            ) {
               appointment_dates.push(
                  new Date(item.appointment_date).getTime()
               );
            }
         }
      }
      dispatch(setAppointmentDates(appointment_dates));
   }, [getacceptedAppointment]);
   // Handles whether to display a text or display the actual data
   let displayData;

   // Displays a text if there are no Pending appointments
   if (getacceptedAppointment.length === 0) {
      displayData = (
         <div className={styles.emptyMessage}>
            <p className={styles.text}>Nothing to show here.</p>
         </div>
      );
      // If there are pending appointments, display the data
   } else {
      displayData = (
         <>
            {getacceptedAppointment.map((data, index) => {
               return (
                  <>
                     <tr key={index}>
                        <td>
                           <img
                              src={data?.patient_info.person_image}
                              alt=""
                              className={styles.table_img}
                           />
                        </td>
                        {/* display name */}
                        <td>
                           {`${data?.patient_info.first_name} ${data?.patient_info.last_name}`}
                        </td>
                        {/* display reason for appointment */}
                        <td>{data?.appointment_reason}</td>
                        {/* display appointment date */}
                        <td>
                           {new Date(data?.appointment_date).getMonth() + 1}-
                           {new Date(data?.appointment_date).getDate() + 1}-
                           {new Date(data?.appointment_date).getFullYear()}
                        </td>
                        <td>
                           {data?.appointment_start_time}-
                           {data?.appointment_end_time}
                        </td>
                     </tr>
                  </>
               );
            })}
         </>
      );
   }

   return (
      <>
         <Helmet>
            <title>Dashboard | Eirhub</title>
            <meta name="description" content="Dashboard of the doctor" />
         </Helmet>
         <div className={styles.wrapper}>
            <main className={styles.main}>
               <section className={styles.section}>
                  <div className={styles.middle_section}>
                     {/* box that containst the summary display for the doctor */}
                     <div className={styles.doctor_display}>
                        {/* Each display make into a card and joined together on large screens */}
                        <div className={styles.card} id={styles.first_card}>
                           <div className={styles.icon_div}>
                              <IoIosPeople className={styles.icon} />
                           </div>
                           <p className={styles.digits}>
                              {numOfdetails?.number_of_patients}
                           </p>
                           <div className={styles.details}>
                              <p className={styles.text}>Patients</p>
                           </div>
                        </div>
                        <div className={styles.card} id={styles.second_card}>
                           <div className={styles.icon_div}>
                              <AiFillFile className={styles.icon} />
                           </div>{' '}
                           <p className={styles.digits}>
                              {numOfdetails?.number_of_reports}
                           </p>
                           <div className={styles.details}>
                              <p className={styles.text}>reports</p>
                           </div>
                        </div>
                        <div className={styles.card} id={styles.third_card}>
                           <div className={styles.icon_div}>
                              <CgCalendar className={styles.icon} />
                           </div>
                           <p className={styles.digits}>
                              {numOfdetails?.number_of_appointments}
                           </p>
                           <div className={styles.details}>
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
                        <div className={styles.appointmentContainer}>
                           <table>
                              <thead>
                                 <th className={styles.imgHeader}>Profile</th>
                                 <th className={styles.tName}>Name</th>
                                 <th className={styles.tCondition}>
                                    Condition
                                 </th>
                                 <th className={styles.tDate}>Date</th>
                                 <th className={styles.tTime}>Time</th>
                              </thead>
                              <tbody className={styles.tbody}>
                                 {displayData}
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
};

const mapStateToProps = (state) => {
   return {
      doctorProfile: state.doctorProfile,
   };
};

export default connect(mapStateToProps)(MidDashboard);
