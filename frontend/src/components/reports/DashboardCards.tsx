import type { DashboardStats } from "../../types/report";

type Props = {
  stats: DashboardStats;
};

export default function DashboardCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-3 gap-5 mb-8">

      <div className="rounded bg-white p-5 shadow">
        <h3>Customers</h3>
        <p className="text-3xl font-bold">
          {stats.customers}
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h3>Products</h3>
        <p className="text-3xl font-bold">
          {stats.products}
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h3>Orders</h3>
        <p className="text-3xl font-bold">
          {stats.orders}
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h3>Invoices</h3>
        <p className="text-3xl font-bold">
          {stats.invoices}
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h3>Payments</h3>
        <p className="text-3xl font-bold">
          {stats.payments}
        </p>
      </div>

      <div className="rounded bg-white p-5 shadow">
        <h3>Revenue</h3>
        <p className="text-3xl font-bold">
          ₹ {stats.revenue}
        </p>
      </div>

    </div>
  );
}