//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

// COMPONENTS
import NavBar from "../NavBar";
import HomePage from "../pages/HomePage";
import CustomerRegisterPage from "../pages/CustomerRegisterPage";
import CustomerSearchPage from "../pages/CustomerSearchPage";
import NextDeliveryPage from "../pages/NextDeliveryPage";
import OrdersPage from "../pages/OrdersPage";
import AddOrderPage from "../pages/AddOrderPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer-list/" element={<CustomerSearchPage />} />
          <Route path="/customer-register" element={<CustomerRegisterPage />} />
          <Route path="/add-order" element={<AddOrderPage />} />
          <Route path="/order-list" element={<OrdersPage />} />
          <Route path="/next-delivery" element={<NextDeliveryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
