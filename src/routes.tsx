import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Constants from './utils/constants';
import FAQ from './Pages/Landing_page/FAQ/FAQ';
import HowItWorks from './Pages/Landing_page/HowItWorks';
import LandingPage from './Pages/Landing_page/LandingPage';
import ServicesPage from './Pages/Landing_page/ServicesPage';
import UserDashboard from './Pages/User Dashboard/UserDashboard';

const routePaths = Constants.ROUTES;

type routing = {
   main: RouteObject[];
   user: RouteObject[];
   doctor: RouteObject[];
};

const appRoutes: routing = {
   main: [
      {
         path: routePaths.landingPage,
         element: <LandingPage />,
      },
      {
         path: routePaths.ourServices,
         element: <ServicesPage />,
      },
      {
         path: routePaths.howItWorks,
         element: <HowItWorks data-aos="zoom-out-up" duration="4000" />,
      },
      {
         path: routePaths.FAQ,
         element: <FAQ />,
      },
   ],
   user: [
      {
         path: routePaths.userDashboard,
         element: <UserDashboard />,
      },
   ],
   doctor: [],
};

export const allRoutes = createBrowserRouter([
   ...appRoutes.main,
   ...appRoutes.user,
   ...appRoutes.doctor,
]);
