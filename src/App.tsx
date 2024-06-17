// General import
import './App.css';
import { RouterProvider } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
