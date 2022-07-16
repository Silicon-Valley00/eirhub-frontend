import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './Pages/User Dashboard/UserDashboard';
import LandingPage from './Pages/Landing page/LandingPage';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';
import DashboardNotificationAlerts from './Pages/User Dashboard/components/DashBoardNotificationAlerts.js';
import FindDoctor from './Pages/User Dashboard/FindDoctor/FindDoctor';
import FindDoctorProfile from './Pages/User Dashboard/components/FindDoctorProfile.js';
import ServicesPage from './Pages/Landing page/ServicesPage';

function App() {
   return (
      <Routes>
         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />
         <Route path="/our-services" exact element={<ServicesPage />} />

         <Route path="/landing-page" exact element={<LandingPage />} />

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
            path="/find-a-doctor"
            exact
            element={
               <UserDashboard
                  parent={<FindDoctor pushData={FindDoctorProfile.pullData} />}
                  child={<FindDoctorProfile />}
                  page={'finddoctor'}
               />
            }
         />
      </Routes>
   );
}

export default App;
