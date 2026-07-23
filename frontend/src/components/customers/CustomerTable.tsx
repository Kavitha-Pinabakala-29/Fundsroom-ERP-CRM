import type { Customer } from "../../types/customer";

type Props = {
  customers: Customer[];
};

export default function CustomerTable({
  customers,
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}