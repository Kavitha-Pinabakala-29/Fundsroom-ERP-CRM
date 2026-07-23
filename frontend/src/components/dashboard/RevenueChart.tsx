export default function RevenueChart({
  data,
}: any) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Revenue
      </h2>

      {data.map((item: any) => (
        <div
          key={item.month}
          className="mb-3"
        >
          <div className="flex justify-between">
            <span>{item.month}</span>

            <span>₹ {item.revenue}</span>
          </div>

          <div className="mt-1 h-3 rounded bg-gray-200">
            <div
              className="h-3 rounded bg-green-500"
              style={{
                width: `${Math.min(
                  item.revenue / 1000,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}