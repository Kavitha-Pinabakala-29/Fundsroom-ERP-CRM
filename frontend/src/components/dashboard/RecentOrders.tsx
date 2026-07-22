function RecentOrders() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-semibold">
        Recent Orders
      </h2>

      <ul className="space-y-4">

        <li>#1023 - Completed</li>

        <li>#1024 - Pending</li>

        <li>#1025 - Processing</li>

      </ul>

    </div>
  );
}

export default RecentOrders;