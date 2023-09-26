import React from 'react';
import { useUser } from './usercontext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const { state } = useUser();
  const isAdmin = state.user?.userName === 'admin';

  if (!isAdmin) {
    // If not admin, redirect to a suitable route (e.g., /login or /)
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
