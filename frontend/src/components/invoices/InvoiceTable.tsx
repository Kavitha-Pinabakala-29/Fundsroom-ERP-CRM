type Props = {
  invoices: any[];
  onMarkPaid: (invoice: any) => void;
};

export default function InvoiceTable({
  invoices,
  onMarkPaid,
}: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Invoices
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3 text-left">
              Invoice
            </th>

            <th className="p-3 text-left">
              Customer
            </th>

            <th className="p-3 text-left">
              Amount
            </th>

            <th className="p-3 text-left">
              Status
            </th>

            <th className="p-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {invoices.map((invoice) => (

            <tr
              key={invoice.id}
              className="border-b"
            >

              <td className="p-3">
                {invoice.id.slice(0,8)}
              </td>

              <td className="p-3">
                {invoice.customer?.name}
              </td>

              <td className="p-3">
                ₹ {invoice.total}
              </td>

              <td className="p-3">
                {invoice.status}
              </td>

              <td className="p-3">

                {
                  invoice.status !== "PAID" && (

                    <button
                      onClick={() =>
                        onMarkPaid(invoice)
                      }
                      className="rounded bg-green-600 px-3 py-1 text-white"
                    >
                      Mark Paid
                    </button>

                  )
                }

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}