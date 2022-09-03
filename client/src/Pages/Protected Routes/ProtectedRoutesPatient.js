import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesPatient({ isPatientAuth }) {
   return isPatientAuth ? <Outlet /> : <Navigate to="*" />;
}
export default ProtectedRoutesPatient;
