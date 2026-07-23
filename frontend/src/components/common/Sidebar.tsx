import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Package,
  ShoppingCart,
  Receipt,
  CreditCard,
  BarChart3,
  Activity,
  Settings,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        Fundsroom ERP
      </h1>

      <nav className="space-y-2">

        <NavLink to="/dashboard">Dashboard</NavLink><br />
        <NavLink to="/users">Users</NavLink><br />
        <NavLink to="/customers">Customers</NavLink><br />
        <NavLink to="/leads">Leads</NavLink><br />
        <NavLink to="/products">Products</NavLink><br />
        <NavLink to="/orders">Orders</NavLink><br />
        <NavLink to="/invoices">Invoices</NavLink><br />
        <NavLink to="/payments">Payments</NavLink><br />
        <NavLink to="/reports">Reports</NavLink><br />
        <NavLink to="/analytics">Analytics</NavLink><br />
        <NavLink to="/activity">Activity</NavLink><br />
        <NavLink to="/notifications">Notifications</NavLink><br />
        <NavLink to="/settings">Settings</NavLink><br />
        <NavLink to="/stock">Stock</NavLink>
      
        <button
          onClick={handleLogout}
          className="mt-8 text-red-400"
        >
          Logout
        </button>

      </nav>

    </aside>
  );
}