import {
  LayoutDashboard,
  Users,
  UserPlus,
  Package,
  ShoppingCart,
  Receipt,
  Wallet,
  BarChart3,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Leads", icon: UserPlus, path: "/leads" },
  { name: "Products", icon: Package, path: "/products" },
  { name: "Orders", icon: ShoppingCart, path: "/orders" },
  { name: "Invoices", icon: Receipt, path: "/invoices" },
  { name: "Payments", icon: Wallet, path: "/payments" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Activity", icon: History, path: "/activity" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar() {
  return (
    <aside
      style={{
        width: 250,
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: 30 }}>Fundsroom ERP</h2>

      {menus.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px",
            marginBottom: "8px",
            color: "white",
          }}
        >
          <item.icon size={20} />
          {item.name}
        </NavLink>
      ))}

      <div
        style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
        }}
      >
        <LogOut size={20} />
        Logout
      </div>
    </aside>
  );
}

export default Sidebar;