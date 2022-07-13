import './App.css';
import UserDashboard from './Pages/User Dashboard/UserDashboard';
import LandingPage from './Pages/Landing page/LandingPage';
import Dashboard from './Pages/User Dashboard/Dashboard/Dashboard.js';

import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesPage from './Pages/Landing page/ServicesPage';

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
            element={<UserDashboard child={<Dashboard />} />}
         />
         {/* Route for our services  */}
         <Route path="/our-services" exact element={<ServicesPage />} />
      </Routes>
   );
}

export default App;
