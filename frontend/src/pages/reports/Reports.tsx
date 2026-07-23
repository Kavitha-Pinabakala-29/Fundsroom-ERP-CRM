import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import DashboardCards from "../../components/reports/DashboardCards";
import SalesTable from "../../components/reports/SalesTable";
import ProductReportTable from "../../components/reports/ProductReportTable";
import CustomerReportTable from "../../components/reports/CustomerReportTable";

import {
  getDashboardStats,
  getSalesReport,
  getProductReport,
  getCustomerReport,
} from "../../services/reportService";

import type {
  DashboardStats,
  SalesReport,
  ProductReport,
  CustomerReport,
} from "../../types/report";

export default function Reports() {

  const [stats, setStats] =
    useState<DashboardStats>({
      customers: 0,
      products: 0,
      orders: 0,
      invoices: 0,
      payments: 0,
      revenue: 0,
    });

  const [sales, setSales] =
    useState<SalesReport[]>([]);

  const [products, setProducts] =
    useState<ProductReport[]>([]);

  const [customers, setCustomers] =
    useState<CustomerReport[]>([]);

  async function loadReports() {

    try {

      const dashboard =
        await getDashboardStats();

      const salesData =
        await getSalesReport();

      const productData =
        await getProductReport();

      const customerData =
        await getCustomerReport();

      setStats(dashboard);

      setSales(salesData);

      setProducts(productData);

      setCustomers(customerData);

    } catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadReports();

  }, []);

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">
        Reports
      </h1>

      <DashboardCards stats={stats} />

      <div className="mt-8">

        <h2 className="mb-3 text-2xl font-semibold">
          Sales Report
        </h2>

        <SalesTable sales={sales} />

      </div>

      <div className="mt-10">

        <h2 className="mb-3 text-2xl font-semibold">
          Product Report
        </h2>

        <ProductReportTable
          products={products}
        />

      </div>

      <div className="mt-10">

        <h2 className="mb-3 text-2xl font-semibold">
          Customer Report
        </h2>

        <CustomerReportTable
          customers={customers}
        />

      </div>

    </MainLayout>

  );

}