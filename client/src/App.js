// General import
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Imports for landing pate
import LandingPage from './Pages/Landing_page/LandingPage';
import ServicesPage from './Pages/Landing_page/ServicesPage';
import HowItWorks from './Pages/Landing_page/HowItWorks';
import FAQ from './Pages/Landing_page/FAQ/FAQ';

//Imports for PageNotFound
import PageNotFound from './Pages/PageNotFound/PageNotFound';

// Imports for user-dashboard
import UserDashboard from './Pages/User Dashboard/UserDashboard';
import Profile from './Pages/User Dashboard/Profile/Profile';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';
import DashboardNotificationAlerts from './Pages/User Dashboard/components/DashBoardNotificationAlerts.js';
import FindDoctor from './Pages/User Dashboard/FindDoctor/FindDoctor';
import FindDoctorProfile from './Pages/User Dashboard/components/FindDoctorProfile.js';
import Medications from './Pages/User Dashboard/Medications/Medications';
import MedicationForm from './Pages/User Dashboard/components/MedicationForm';
import Records from './Pages/User Dashboard/Records/Records';
import RecordChild from './Pages/User Dashboard/components/RecordsChild';
import Schedule from './Pages/User Dashboard/Schedule/Schedule';
import Message from './Pages/User Dashboard/Message/Message';
import MessageUsers from './Pages/User Dashboard/components/MessageUsers';

// imports for doctor's dashboard
import MidDashboard from './Pages/DoctorDashboard/Dashboard/Dashboard';
import DoctorCalendar from './Pages/DocDashboard/components/Calendar';
import DocDashboard from './Pages/DocDashboard/Docdashboard';
import DocProfile from './Pages/DocDashboard/Profile/Profile';
import DoctorPatients from './Pages/DocDashboard/DoctorPatients/DoctorPatients';

//Others
import TagManager from 'react-gtm-module';
import ProtectedRoutesPatient from './Pages/Protected Routes/ProtectedRoutesPatient';
import ProtectedRoutesDoctor from './Pages/Protected Routes/ProtectedRoutesDoctor';
import ProtectedRoutesLanding from './Pages/Protected Routes/ProtectedRoutesLanding';
import Loading from './Pages/Loading Page/loadingpage';
import DoctorSchedule from './Pages/DocDashboard/Schedule/DoctorSchedule';
import DoctorRecords from './Pages/DocDashboard/Records/DoctorRecords';

//Google analytics
const tagManagerArgs = {
   gtmID: 'GTM-WHSKBFK',
};

TagManager.initialize(tagManagerArgs);

AOS.init();

function App() {
   const isPatientAuth = useSelector((state) => state.isPatientAuth);
   const isDoctorAuth = useSelector((state) => state.isDoctorAuth);

   return (
      //    /* Use the routes below if you do want restrictions with your routes */

      // <Routes>
      //    <Route path="*" exact element={<PageNotFound />} />
      //    <Route path="/loading" exact element={<Loading />} />
      //    {/* Route for landing page and it's sub-pages */}
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    >
      //       <Route
      //          path="/"
      //          exact
      //          element={<Navigate replace to={'/landing-page'} />}
      //       />
      //    </Route>
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    >
      //       <Route path="/landing-page" exact element={<LandingPage />} />
      //    </Route>{' '}
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    ></Route>{' '}
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    >
      //       <Route path="/our-services" exact element={<ServicesPage />} />
      //    </Route>{' '}
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    >
      //       <Route path="/how-it-works" exact element={<HowItWorks />} />
      //    </Route>{' '}
      //    <Route
      //       element={
      //          <ProtectedRoutesLanding
      //             isDoctorAuth={isDoctorAuth}
      //             isPatientAuth={isPatientAuth}
      //          />
      //       }
      //    >
      //       <Route path="/FAQ" exact element={<FAQ />} />
      //    </Route>
      //    {/* End of routes for landing page */}
      //    {/* Route for user-dashboard */}
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/userdashboard"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={<Dashboard />}
      //                child={<DashboardNotificationAlerts />}
      //                page={'dashboard'}
      //             />
      //          }
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/userprofile"
      //          exact
      //          element={<UserDashboard parent={<Profile />} page={'profile'} />}
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/reports"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={<Records />}
      //                child={<RecordChild />}
      //                page={'records'}
      //             />
      //          }
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/prescriptions"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={<Medications pushData={MedicationForm.pullData} />} //Transfers data from parent component to child component
      //                child={<MedicationForm />}
      //                page={'medications'}
      //             />
      //          }
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/find-a-doctor"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={
      //                   <FindDoctor pushData={FindDoctorProfile.pullData} />
      //                } //Transfers data from parent component to child component
      //                child={<FindDoctorProfile />}
      //                page={'finddoctor'}
      //             />
      //          }
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/usermessaging"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={<Message />}
      //                child={<MessageUsers />}
      //                page={'message'}
      //             />
      //          }
      //       />
      //    </Route>
      //    <Route
      //       element={<ProtectedRoutesPatient isPatientAuth={isPatientAuth} />}
      //    >
      //       <Route
      //          path="/scheduling"
      //          exact
      //          element={
      //             <UserDashboard
      //                parent={<Schedule />}
      //                child={<DashboardNotificationAlerts />}
      //                page={'schedule'}
      //             />
      //          }
      //       />
      //    </Route>
      //    {/* End of routes for user dashboard */}
      //    {/* Start of route for doctor-dashboard. */}
      //    <Route element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}>
      //       <Route path="/doctordashboard" exact element={<MidDashboard />} />
      //    </Route>
      //    <Route element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}>
      //       <Route path="/doctorprofile" exact element={<DoctorProfile />} />
      //    </Route>
      //    <Route element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}>
      //       <Route path="/doctorrecords" exact element={<DoctorRecords />} />
      //    </Route>
      //    <Route element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}>
      //       <Route path="/doctormessages" exact element={<DoctorMessage />} />
      //    </Route>
      //    <Route element={<ProtectedRoutesDoctor isDoctorAuth={isDoctorAuth} />}>
      //       <Route path="/doctorschedule" exact element={<DoctorSchedule />} />
      //    </Route>
      //    {/* End of route for doctor-dashboard */}
      // </Routes>

      //    /* Use the routes below if you do not want restrictions with your routes */
      <Routes>
         <Route path="*" exact element={<PageNotFound />} />
         <Route path="/loading" exact element={<Loading />} />
         {/* Route for landing page and it's sub-pages */}

         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />

         <Route path="/landing-page" exact element={<LandingPage />} />

         <Route path="/our-services" exact element={<ServicesPage />} />

         <Route path="/how-it-works" exact element={<HowItWorks />} />

         <Route path="/FAQ" exact element={<FAQ />} />
         {/* End of routes for landing page */}
         {/* Route for user-dashboard */}

         <Route
            path="/userdashboard"
            exact
            element={
               <UserDashboard
                  parent={<Dashboard />}
                  child={<DashboardNotificationAlerts />}
                  page={'dashboard'}
               />
            }
         />

         <Route
            path="/userprofile"
            exact
            element={<UserDashboard parent={<Profile />} page={'profile'} />}
         />

         <Route
            path="/reports"
            exact
            element={
               <UserDashboard
                  parent={<Records />}
                  child={<RecordChild />}
                  page={'records'}
               />
            }
         />

         <Route
            path="/prescriptions"
            exact
            element={
               <UserDashboard
                  parent={<Medications pushData={MedicationForm.pullData} />} //Transfers data from parent component to child component
                  child={<MedicationForm />}
                  page={'medications'}
               />
            }
         />

         <Route
            path="/find-a-doctor"
            exact
            element={
               <UserDashboard
                  parent={<FindDoctor pushData={FindDoctorProfile.pullData} />} //Transfers data from parent component to child component
                  child={<FindDoctorProfile />}
                  page={'finddoctor'}
               />
            }
         />

         <Route
            path="/usermessaging"
            exact
            element={
               <UserDashboard
                  parent={<Message />}
                  child={<MessageUsers />}
                  page={'message'}
               />
            }
         />

         <Route
            path="/scheduling"
            exact
            element={
               <UserDashboard
                  parent={<Schedule />}
                  child={<DashboardNotificationAlerts />}
                  page={'schedule'}
               />
            }
         />
         {/* End of routes for user dashboard */}

         {/* Start of route for doctor-dashboard. */}
         <Route
            path="/doctordashboard"
            exact
            element={
               <DocDashboard
                  middleSection={<MidDashboard />}
                  rightSection={<DoctorCalendar />}
                  page={'dashboard'}
               />
            }
         />
         <Route
            path="/doctorprofile"
            exact
            element={
               <DocDashboard
                  middleSection={<DocProfile />}
                  page={'doctorprofile'}
               />
            }
         />
         <Route
            path="/doctorschedule"
            exact
            element={
               <DocDashboard
                  middleSection={<DoctorSchedule />}
                  rightSection={<DoctorPatients />}
                  page={'doctorschedule'}
               />
            }
         />
         <Route
            path="/doctorrecords"
            exact
            element={
               <DocDashboard
                  middleSection={<DoctorRecords />}
                  rightSection={<DoctorPatients />}
                  page={'records'}
               />
            }
         />

         {/* <Route path="/doctorrecords" exact element={<DoctorRecords />} />
         <Route path="/doctormessages" exact element={<DoctorMessage />} />
         <Route path="/doctorschedule" exact element={<DoctorSchedule />} />
         End of route for doctor-dashboard */}
      </Routes>
   );
}

export default App;
