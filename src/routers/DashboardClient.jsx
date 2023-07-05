import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbars/NavbarUser";
import Home from "../pages/user/Home.jsx";
import MyTickets from "../pages/user/MyTIckets";
import Record from "../pages/user/Record";
import ViewEvent from "../pages/user/ViewEvent";
import TicketPurchase from "../pages/user/TicketPurchase";
import TicketInformation from "../pages/user/TicketInformation";
import Pay from "../pages/user/Pay";
import PaymentInfo from "../pages/user/PaymentInfo";
import Transaction from "../pages/user/Transaction";
import TransferTicket from "../pages/user/TransferTicket";
import ViewQR from "../pages/user/ViewQR";

export const DashboardClient = () => {
  
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info/:id" element={<ViewEvent />} />
          <Route path="/purchase-ticket/:id" element={<TicketPurchase />} />
          <Route path="/info-ticket/:id" element={<PaymentInfo />} />
          <Route path="/pay/:id" element={<Pay />} />
          <Route path="/succesful-transaction/:id" element={<Transaction />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="/history" element={<Record/>} />
          <Route path="/info-pay-ticket" element={<TicketInformation/> } />
          <Route path="/transfer-ticket" element={<TransferTicket/> } />
          <Route path="/info-QR" element={<ViewQR/> } />
        </Routes>
        
      </div>
    </>
  );
};

export default DashboardClient;