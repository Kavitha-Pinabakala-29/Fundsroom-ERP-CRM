type Props = {
  revenue: number;
};

export default function RevenueAnalytics({
  revenue,
}: Props) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Revenue Analytics
      </h2>

      <h1 className="text-4xl font-bold text-green-600">
        ₹ {revenue.toLocaleString()}
      </h1>
    </div>
  );
}