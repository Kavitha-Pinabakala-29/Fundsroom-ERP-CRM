type Props = {
  orders: any[];
};

export default function OrderTable({
  orders,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Total</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t"
            >
              <td className="p-3">
                {order.customer?.name}
              </td>

              <td className="p-3">
                {order.status}
              </td>

              <td className="p-3">
                ₹ {order.total}
              </td>

              <td className="p-3">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}