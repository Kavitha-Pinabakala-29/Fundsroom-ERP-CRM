import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import { getCustomers } from "../../services/customerService";

import type { Customer } from "../../types/customer";

import CustomerTable from "../../components/customers/CustomerTable";
import AddCustomerModal from "../../components/customers/AddCustomerModal";
import EditCustomerModal from "../../components/customers/EditCustomerModal";
import DeleteCustomerDialog from "../../components/customers/DeleteCustomerDialog";

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
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

      <EditCustomerModal
        open={editOpen}
        customer={selectedCustomer}
        onClose={() => setEditOpen(false)}
        onSuccess={loadCustomers}
      />

      <DeleteCustomerDialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
      />

      <CustomerTable
        customers={customers}
        onEdit={(customer) => {
          setSelectedCustomer(customer);
          setEditOpen(true);
        }}
        onDelete={(customer) => {
          setSelectedCustomer(customer);
          setDeleteOpen(true);
        }}
      />
    </MainLayout>
  );
}