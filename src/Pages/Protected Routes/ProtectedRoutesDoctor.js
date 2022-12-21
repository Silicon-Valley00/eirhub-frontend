import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesDoctor({ isDoctorAuth }) {
   return isDoctorAuth ? <Outlet /> : <Navigate to="*" />;
}
export default ProtectedRoutesDoctor;
