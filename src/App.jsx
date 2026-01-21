import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/farmer/Dashboard";
import AddCrop from "./pages/farmer/AddCrop";
import AdminOrders from "./pages/admin/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/farmer/add-crop" element={<AddCrop />} />

        <Route path="/admin/orders" element={<AdminOrders />} />
      </Routes>
    </BrowserRouter>
  );
}
