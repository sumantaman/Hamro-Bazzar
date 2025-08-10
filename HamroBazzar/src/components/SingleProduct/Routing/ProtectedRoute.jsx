import { useState, useEffect } from "react";
import { getUser } from "../../../services/userServices";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getUser()
      .then(() => {
        setAuthenticated(true);
      })
      .catch(() => {
        setAuthenticated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// import React from 'react'
// import { getUser } from '../../../services/userServices'
// import { Navigate, Outlet } from 'react-router-dom'

// const ProtectedRoute = () => {
//   return getUser() ? <Outlet/> : <Navigate to="login"/>
// }

// export default ProtectedRoute
