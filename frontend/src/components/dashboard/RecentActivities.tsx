function RecentActivities() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-semibold">
        Recent Activities
      </h2>

      <ul className="space-y-4">

        <li>Admin created Customer</li>

        <li>Invoice Generated</li>

        <li>Payment Received</li>

      </ul>

    </div>
  );
}

export default RecentActivities;