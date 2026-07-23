import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getCustomers } from "../../services/customerService";
import type { Customer } from "../../types/customer";

export default function Customers() {
  console.log("Customers page rendered");

  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    console.log("useEffect running");

    async function loadCustomers() {
      try {
        console.log("Calling API...");

        const data = await getCustomers();

        console.log("Customers API:", data);

        setCustomers(data);
      } catch (err) {
        console.error("API Error:", err);
      }
    }

    loadCustomers();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Customers</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
}