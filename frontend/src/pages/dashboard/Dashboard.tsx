import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import DashboardCards from "../../components/reports/DashboardCards";

import RevenueChart from "../../components/dashboard/RevenueChart";

import OrderStatusChart from "../../components/dashboard/OrderStatusChart";

import RecentOrders from "../../components/dashboard/RecentOrders";

import RecentCustomers from "../../components/dashboard/RecentCustomers";

import {
  getDashboard,
  getRevenue,
  getOrderStatus,
  getRecentOrders,
  getRecentCustomers,
} from "../../services/dashboardService";

export default function Dashboard() {

  const [stats, setStats] = useState<any>({});

  const [revenue, setRevenue] = useState([]);

  const [status, setStatus] = useState([]);

  const [orders, setOrders] = useState([]);

  const [customers, setCustomers] = useState([]);

  async function loadDashboard() {

    try {

      setStats(await getDashboard());

      setRevenue(await getRevenue());

      setStatus(await getOrderStatus());

      setOrders(await getRecentOrders());

      setCustomers(await getRecentCustomers());

    }

    catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadDashboard();

  }, []);

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">

        Dashboard

      </h1>

      <DashboardCards stats={stats} />

      <div className="mt-8 grid grid-cols-2 gap-6">

        <RevenueChart
          data={revenue}
        />

        <OrderStatusChart
          data={status}
        />

      </div>

      <div className="mt-8 grid grid-cols-2 gap-6">

        <RecentOrders
          orders={orders}
        />

        <RecentCustomers
          customers={customers}
        />

      </div>

    </MainLayout>

  );

}