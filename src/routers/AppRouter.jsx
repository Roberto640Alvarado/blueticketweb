import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../pages/user/Login";
import DashboardClient from "./DashboardClient";
import DashboardAdmin from "./DashboardAdmin";
import Home from "../pages/user/Home.jsx";
import Navbar from "../components/Navbars/NavbarHomepage";
import CreateEvent from "../pages/admin/CreateEvent";
import NewLocation from "../pages/admin/NewLocation";
import ChangePassword from "../pages/user/ChangePassword.jsx";
import PrivateRoutes from "./PrivateRoutes";
import PrivateRoutesAdmin from "./PrivateRoutesAdmin";
import Register from "../pages/user/Register";
import ViewEvent from "../pages/user/ViewEvent";


const MainContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <Home />
              </MainContainer>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/info/:id" element={<ViewEvent />} />
          <Route element={<PrivateRoutes/>}>
            <Route path="/user/*" element={<DashboardClient />} />
          </Route>
          <Route element={<PrivateRoutesAdmin/>}>
            <Route path="/admin/*" element={<DashboardAdmin />} />
          </Route>
          <Route path="/register" element= {<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
};