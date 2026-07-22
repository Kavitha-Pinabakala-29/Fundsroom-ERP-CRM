import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/customers/Customers";
import Leads from "../pages/leads/Leads";
import Products from "../pages/products/Products";
import Orders from "../pages/orders/Orders";
import Invoices from "../pages/invoices/Invoices";
import Payments from "../pages/payments/Payments";
import Reports from "../pages/reports/Reports";
import Activity from "../pages/activity/Activity";
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/leads" element={<Leads />} />

          <Route path="/products" element={<Products />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/invoices" element={<Invoices />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/activity" element={<Activity />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}