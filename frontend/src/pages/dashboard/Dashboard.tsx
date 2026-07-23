import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import { getDashboard } from "../../services/dashboardService";

import type { DashboardData } from "../../types/dashboard";

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await getDashboard();
        setData(res);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <h2>Loading Dashboard...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>Dashboard</h1>

      <h3>Total Customers : {data?.totalCustomers}</h3>

      <h3>Total Leads : {data?.totalLeads}</h3>

      <h3>New Leads : {data?.newLeads}</h3>

      <h3>Contacted : {data?.contactedLeads}</h3>

      <h3>Qualified : {data?.qualifiedLeads}</h3>

      <h3>Negotiation : {data?.negotiationLeads}</h3>

      <h3>Won : {data?.wonLeads}</h3>

      <h3>Lost : {data?.lostLeads}</h3>
    </MainLayout>
  );
}