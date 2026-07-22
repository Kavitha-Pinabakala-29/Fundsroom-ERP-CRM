import MainLayout from "../../layouts/MainLayout";

import StatCard from "../../components/dashboard/StatCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import SalesChart from "../../components/dashboard/SalesChart";
import RecentOrders from "../../components/dashboard/RecentOrders";
import RecentActivities from "../../components/dashboard/RecentActivities";

import { stats } from "../../utils/dashboardData";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome back 👋
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              change={item.change}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <RevenueChart />
          <SalesChart />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <RecentOrders />
          <RecentActivities />
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;