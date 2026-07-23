import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import { getCustomers } from "../../services/customerService";

import type { Customer } from "../../types/customer";

import CustomerTable from "../../components/customers/CustomerTable";
import AddCustomerModal from "../../components/customers/AddCustomerModal";

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [open, setOpen] = useState(false);

  async function loadCustomers() {
    try {
      console.log("Calling API...");

      const data = await getCustomers();

      console.log("Customers API:", data);

      setCustomers(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Customers
      </h1>

      <button
        onClick={() => setOpen(true)}
        className="mb-5 rounded bg-blue-600 px-4 py-2 text-white"
      >
        + Add Customer
      </button>

      <AddCustomerModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={loadCustomers}
      />

      <CustomerTable customers={customers} />
    </MainLayout>
  );
}