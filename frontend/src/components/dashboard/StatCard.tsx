import CountUp from "react-countup";

type Props = {
  title: string;
  value: string;
  change: string;
};

function StatCard({ title, value, change }: Props) {
  const number = Number(value.replace(/[^\d]/g, ""));

  return (
    <div className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-bold">

        {value.startsWith("₹") ? "₹" : ""}

        <CountUp
          end={number}
          duration={2}
          separator=","
        />

      </h2>

      <p className="mt-2 text-green-600">

        {change} this month

      </p>

    </div>
  );
}

export default StatCard;