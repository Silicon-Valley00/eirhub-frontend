import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './Pages/User Dashboard/UserDashboard';
import LandingPage from './Pages/Landing page/LandingPage';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';
import DashboardNotificationAlerts from './Pages/User Dashboard/components/DashBoardNotificationAlerts.js';
import FindingDoctor from './Pages/User Dashboard/FindDoctor/FindDoctor';

function App() {
   return (
      <Routes>
         <Route
            path="/"
            exact
            element={<Navigate replace to={'/landing-page'} />}
         />

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
                  parent={<FindingDoctor />}
                  child={<DashboardNotificationAlerts />}
                  page={'finddoctor'}
               />
            }
         />
      </Routes>
   );
}

export default App;
