import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import OrderTable from "../../components/orders/OrderTable";
import AddOrderModal from "../../components/orders/AddOrderModal";

import { getOrders } from "../../services/orderService";

import type { Order } from "../../types/order";

export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);

  const [open, setOpen] = useState(false);

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

      <div className="mb-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Orders
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          + Add Order
        </button>

      </div>

      <OrderTable
        orders={orders}
      />

      <AddOrderModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={loadOrders}
      />

    </MainLayout>

  );

}