// General import
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Imports for landing pate
import LandingPage from './Pages/Landing page/LandingPage';
import ServicesPage from './Pages/Landing page/ServicesPage';
import HowItWorks from './Pages/Landing page/HowItWorks';
import FAQ from './Pages/Landing page/FAQ/FAQ';

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
import Message from './Pages/User Dashboard/Message/Message';

// imports for doctor's dashboard
import DoctorDashboard from './Pages/DoctorDashboard/DoctorDashboard';
import MidDashboard from './Pages/DoctorDashboard/Dashboard/Dashboard';
import DoctorProfile from './Pages/DoctorDashboard/Profile/Profile';
import DoctorRecords from './Pages/DoctorDashboard/Records/DoctorRecords';
import DoctorSchedule from './Pages/DoctorDashboard/Schedule/DoctorSchedule';
AOS.init();

function App() {
   return (
      <Routes>
         {/* Route for landing page and it's sub-pages */}
         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />

         <Route path="*" exact element={<PageNotFound />} />

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

         {/* End of routes for user dashboard */}

         {/* Start of route for doctor-dashboard. */}
         <Route path="/doctordashboard" exact element={<MidDashboard />} />

         <Route path="/doctorprofile" exact element={<DoctorProfile />} />

         {/* End of route for doctor-dashboard */}
         <Route path="/doctorrecords" exact element={<DoctorRecords />} />
         <Route path="/doctorschedule" exact element={<DoctorSchedule />} />

         {/* Start of routes for find-a-doctor page */}

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
            element={<UserDashboard parent={<Message />} page={'message'} />}
         />
         {/* End of routes for user dashboard */}

         {/* Start of route for doctor-dashboard. */}
         <Route path="/doctordashboard" exact element={<MidDashboard />} />

         <Route path="/doctorprofile" exact element={<DoctorProfile />} />
         <Route path="/doctorrecords" exact element={<DoctorRecords />} />

         {/* End of route for doctor-dashboard */}
      </Routes>
   );
}

export default App;
