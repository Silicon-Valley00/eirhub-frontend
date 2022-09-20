import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutesLoading({ isLoading }) {
   return isLoading ? <Outlet /> : <Navigate to="*" />;
}
export default ProtectedRoutesLoading;
