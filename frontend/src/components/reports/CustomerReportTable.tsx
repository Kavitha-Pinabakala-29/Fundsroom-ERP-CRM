import type { CustomerReport } from "../../types/report";

type Props = {
  customers: CustomerReport[];
};

export default function CustomerReportTable({
  customers,
}: Props) {

  return (

    <table className="w-full border">

      <thead>

        <tr className="border bg-gray-100">

          <th className="p-3">Customer</th>

          <th className="p-3">Email</th>

          <th className="p-3">Orders</th>

          <th className="p-3">Total Spent</th>

        </tr>

      </thead>

      <tbody>

        {customers.map((customer) => (

          <tr
            key={customer.id}
            className="border"
          >

            <td className="p-3">
              {customer.name}
            </td>

            <td className="p-3">
              {customer.email}
            </td>

            <td className="p-3">
              {customer.orders}
            </td>

            <td className="p-3">
              ₹ {customer.totalSpent}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}