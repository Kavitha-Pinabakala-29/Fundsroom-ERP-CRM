import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 6200 },
  { month: "Mar", revenue: 5400 },
  { month: "Apr", revenue: 8800 },
  { month: "May", revenue: 7600 },
  { month: "Jun", revenue: 9200 },
];

function RevenueChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow h-80">

      <h2 className="mb-5 text-xl font-semibold">
        Revenue
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;