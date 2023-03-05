import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Constants from '../utils/constants';
import { AppRoute } from '../utils/types';
import FAQ from './Landing_page/FAQ/FAQ';
import HowItWorks from './Landing_page/HowItWorks';
import LandingPage from './Landing_page/LandingPage';
import ServicesPage from './Landing_page/ServicesPage';

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
         element: <HowItWorks />,
      },
      {
         path: routePaths.FAQ,
         element: <FAQ />,
      },
   ],
   user: [],
   doctor: [],
};

export const allRoutes = createBrowserRouter([
   ...appRoutes.main,
   ...appRoutes.user,
   ...appRoutes.doctor,
]);
