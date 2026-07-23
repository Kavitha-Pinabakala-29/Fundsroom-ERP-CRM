import type { Order } from "../../types/order";

type Props = {
  orders: Order[];
  onEdit: (order: Order) => void;
  onDelete: (order: Order) => void;
};

export default function OrderTable({
  orders,
  onEdit,
  onDelete,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border bg-gray-100">
          <th className="p-3">Customer</th>
          <th className="p-3">Products</th>
          <th className="p-3">Total</th>
          <th className="p-3">Status</th>
          <th className="p-3">Created</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border">

            <td className="p-3">
              {order.customer.name}
            </td>

            <td className="p-3">
              {order.items.map((item) => (
                <div key={item.id}>
                  {item.product.name} × {item.quantity}
                </div>
              ))}
            </td>

            <td className="p-3">
              ₹ {order.total}
            </td>

            <td className="p-3">
              {order.status}
            </td>

            <td className="p-3">
              {new Date(order.createdAt).toLocaleDateString()}
            </td>

            <td className="space-x-2 p-3">

              <button
                onClick={() => onEdit(order)}
                className="rounded bg-yellow-500 px-3 py-1 text-white"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(order)}
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