import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LandingPage from './Pages/Landing page/LandingPage';
import ServicesPage from './Pages/Landing page/ServicesPage';
import HowItWorks from './Pages/Landing page/HowItWorks';
import FAQ from './Pages/Landing page/FAQ/FAQ';

import UserDashboard from './Pages/User Dashboard/UserDashboard';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';
import DashboardNotificationAlerts from './Pages/User Dashboard/components/DashBoardNotificationAlerts.js';
import FindDoctor from './Pages/User Dashboard/FindDoctor/FindDoctor';
import FindDoctorProfile from './Pages/User Dashboard/components/FindDoctorProfile.js';
import Medications from './Pages/User Dashboard/Medications/Medications';
import MedicationForm from './Pages/User Dashboard/components/MedicationForm';
import Records from './Pages/User Dashboard/Records/Records';
import RecordChild from './Pages/User Dashboard/components/RecordsChild';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

AOS.init();

function App() {
   return (
      <Routes>
         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />

         <Route path="/landing-page" exact element={<LandingPage />} />

         <Route path="/our-services" exact element={<ServicesPage />} />

         <Route path="/how-it-works" exact element={<HowItWorks />} />

         <Route path="*" exact element={<PageNotFound />} />

         <Route path="/FAQ" exact element={<FAQ />} />

         <Route
            path="/dashboard"
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
            path="/records"
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
            path="/medications"
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
      </Routes>
   );
}

export default App;
