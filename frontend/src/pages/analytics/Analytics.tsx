import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import RevenueAnalytics from "../../components/analytics/RevenueAnalytics";
import TopProducts from "../../components/analytics/TopProducts";
import CustomerGrowth from "../../components/analytics/CustomerGrowth";
import OrderAnalytics from "../../components/analytics/OrderAnalytics";

import {
  getRevenueAnalytics,
  getTopProducts,
  getCustomerGrowth,
  getOrderAnalytics,
} from "../../services/analyticsService";

export default function Analytics() {
  const [revenue, setRevenue] = useState(0);

  const [products, setProducts] = useState([]);

  const [customers, setCustomers] = useState([]);

  const [orders, setOrders] = useState([]);

  async function loadAnalytics() {
    try {
      const revenueData =
        await getRevenueAnalytics();

      const productData =
        await getTopProducts();

      const customerData =
        await getCustomerGrowth();

      const orderData =
        await getOrderAnalytics();

      setRevenue(revenueData.totalRevenue);

      setProducts(productData);

      setCustomers(customerData);

      setOrders(orderData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">
        Analytics
      </h1>

      <RevenueAnalytics
        revenue={revenue}
      />

      <div className="mt-8 grid grid-cols-2 gap-6">

        <TopProducts
          products={products}
        />

        <CustomerGrowth
          customers={customers}
        />

      </div>

      <div className="mt-8">

        <OrderAnalytics
          orders={orders}
        />

      </div>

    </MainLayout>
  );
}