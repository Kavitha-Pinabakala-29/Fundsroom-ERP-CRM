export default function OrderAnalytics({
  orders,
}: any) {

  return (

    <div className="rounded-lg bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        Order Analytics
      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>Customer</th>

            <th>Status</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order: any) => (

            <tr key={order.id}>

              <td>{order.customer.name}</td>

              <td>{order.status}</td>

              <td>₹ {order.total}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}