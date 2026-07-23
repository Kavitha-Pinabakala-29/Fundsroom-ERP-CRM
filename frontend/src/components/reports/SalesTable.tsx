import type { SalesReport } from "../../types/report";

type Props = {
  sales: SalesReport[];
};

export default function SalesTable({ sales }: Props) {

  return (

    <table className="w-full border">

      <thead>

        <tr className="border bg-gray-100">

          <th className="p-3">Invoice</th>

          <th className="p-3">Amount</th>

          <th className="p-3">Method</th>

          <th className="p-3">Date</th>

        </tr>

      </thead>

      <tbody>

        {sales.map((sale) => (

          <tr
            key={sale.id}
            className="border"
          >

            <td className="p-3">
              {sale.invoice.invoiceNo}
            </td>

            <td className="p-3">
              ₹ {sale.amount}
            </td>

            <td className="p-3">
              {sale.method}
            </td>

            <td className="p-3">
              {new Date(
                sale.createdAt
              ).toLocaleDateString()}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}