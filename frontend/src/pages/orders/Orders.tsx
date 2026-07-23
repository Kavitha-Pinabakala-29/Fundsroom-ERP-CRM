import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import type { Order } from "../../types/order";

import { getOrders } from "../../services/orderService";

import OrderTable from "../../components/orders/OrderTable";

export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);

  async function loadOrders() {
    try {

      const data = await getOrders();

      setOrders(data);

    } catch (err) {

      console.log(err);

    }
  }

  useEffect(() => {

    loadOrders();

  }, []);

  return (
    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">
        Orders
      </h1>

      <button
        className="mb-5 rounded bg-blue-600 px-4 py-2 text-white"
      >
        + Create Order
      </button>

      <OrderTable

        orders={orders}

        onEdit={(order: Order) => {

          console.log("Edit", order);

        }}

        onDelete={(order: Order) => {

          console.log("Delete", order);

        }}

      />

    </MainLayout>
  );
}