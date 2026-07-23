import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#ef4444",
];

export default function OrderStatusChart({ data }: any) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Order Status
      </h2>

      <PieChart width={350} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        >
          {data.map((_: any, index: number) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </div>
  );
}