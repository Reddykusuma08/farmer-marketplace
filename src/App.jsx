import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import FarmerDashboard from "./pages/farmer/Dashboard";
import AddCrop from "./pages/farmer/AddCrop";

import AdminOrders from "./pages/admin/Orders";

// NGO pages
import NGODashboard from "./pages/ngo/Dashboard";
import NGOFarmers from "./pages/ngo/Farmers";
import NGOOrders from "./pages/ngo/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Farmer */}
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />

        {/* Admin */}
        <Route path="/admin/orders" element={<AdminOrders />} />

        {/* NGO */}
        <Route path="/ngo/dashboard" element={<NGODashboard />} />
        <Route path="/ngo/farmers" element={<NGOFarmers />} />
        <Route path="/ngo/orders" element={<NGOOrders />} />
      </Routes>
    </BrowserRouter>
  );
}
