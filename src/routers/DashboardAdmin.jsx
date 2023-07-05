import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbars/NavbarAdmin";
import Home from "../pages/user/Home.jsx";
import UpcomingEvents from "../pages/admin/UpcomingEvents";
import FinishedEvents from "../pages/admin/FinishedEvents";
import UserManagement from "../pages/admin/UserManagement";
import GraphEvents from "../pages/admin/GraphEvents"
import GraphEvent from "../pages/admin/GraphEvent"
import CreateEvent from "../pages/admin/CreateEvent";
import NewLocation from "../pages/admin/NewLocation";
import EditEvent from "../pages/admin/EditEvent";
import ListOfLocations from "../pages/admin/ListOfLocations";

export const DashboardAdmin = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/upcoming" element={<UpcomingEvents/>} />
          <Route path="/finished" element={<FinishedEvents/>} />
          <Route path="/management" element={<UserManagement/>} />
          <Route path="/graph" element={<GraphEvents/>} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/newlocation" element={<NewLocation />} />
          <Route path="/edit" element={<EditEvent />} />
          <Route path="/listlocations" element={<ListOfLocations />} />
          <Route path="/graph-event" element={<GraphEvent/>} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardAdmin;
