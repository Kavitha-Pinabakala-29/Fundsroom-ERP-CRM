import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Customer } from "../../types/customer";

import { updateCustomer } from "../../services/customerService";

type Props = {
  open: boolean;
  customer: Customer |null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditCustomerModal({
  open,
  customer,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    if (customer) {
      setForm({
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        company: customer.company,
        // keep a valid default value
        address: "Hyderabad",
      });
    }
  }, [customer]);

  async function handleUpdate() {
    if (!customer) return;

    try {
      await updateCustomer(customer.id, form);

      toast.success("Customer Updated");

      onClose();

      onSuccess();
    } catch (err) {
      console.log(err);

      toast.error("Update Failed");
    }
  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Edit Customer
      </h2>

      <div className="space-y-3">
        <input
          className="w-full rounded border p-2"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-2"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-2"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-2"
          value={form.company}
          onChange={(e) =>
            setForm({ ...form, company: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-2"
          value={form.address}
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
          placeholder="Address"
        />

        <button
          onClick={handleUpdate}
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Update Customer
        </button>
      </div>
    </Modal>
  );
}