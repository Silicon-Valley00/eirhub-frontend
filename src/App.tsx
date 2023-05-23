// General import
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

// Imports for landing pate
import LandingPage from './Pages/Landing_page/LandingPage';
import ServicesPage from './Pages/Landing_page/ServicesPage';
import HowItWorks from './Pages/Landing_page/HowItWorks';
import FAQ from './Pages/Landing_page/FAQ/FAQ';

//Imports for PageNotFound
import PageNotFound from './Pages/PageNotFound/PageNotFound';

//Others
import Loading from './Pages/LoadingPage/loadingpage';
import ProtectedRoutesPatient from './Pages/ProtectedRoutes/ProtectedRoutesPatient';
import ProtectedRoutesDoctor from './Pages/ProtectedRoutes/ProtectedRoutesDoctor';
import ProtectedRoutesLanding from './Pages/ProtectedRoutes/ProtectedRoutesLanding';
import ProtectedRoutesLoading from './Pages/ProtectedRoutes/ProtectedRoutesLoading';
// import { Logout } from './context/authcontext';
import { persistor } from './Store/store';
import { allRoutes } from './routes';

AOS.init();

function App() {
   return (
      <>
         <RouterProvider router={allRoutes} />
      </>
   );
}

export default App;
