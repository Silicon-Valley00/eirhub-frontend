import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Testing out the doctor signup modal
// Saw this as the least complicated way
import DoctorSignup from './Pages/Registration page/components/DoctorSignup'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <DoctorSignup/>
   <BrowserRouter>
      <React.StrictMode>
         <App />
      </React.StrictMode>
   </BrowserRouter>
);
