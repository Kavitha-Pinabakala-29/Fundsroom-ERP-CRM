import type { Customer } from "../../types/customer";

type Props = {
  customers: Customer[];
  onEdit: (customer: Customer) => void;
  onDelete: (customer: Customer) => void;
};

export default function CustomerTable({
  customers,
  onEdit,
  onDelete,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>{customer.company}</td>
            <td>{customer.status}</td>

            <td className="space-x-2">
              <button
                onClick={() => onEdit(customer)}
                className="rounded bg-yellow-500 px-3 py-1 text-white"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(customer)}
                className="rounded bg-red-600 px-3 py-1 text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}