import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesLanding({ isPatientAuth, isDoctorAuth }) {
   return isPatientAuth === false && isDoctorAuth === false ? (
      <Outlet />
   ) : (
      <Navigate to="*" />
   );
}
export default ProtectedRoutesLanding;
