import React from "react";
import { Route, Navigate, Routes as ReactRouterRoutes } from "react-router-dom";
import Login from '../JS/Login';
import Register from '../JS/Register';

const Routes = () => {
    return (
      <div>
    <ReactRouterRoutes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </ReactRouterRoutes>
      </div>
    );
  };
  
  export default Routes;