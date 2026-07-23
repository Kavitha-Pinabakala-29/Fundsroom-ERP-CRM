import type { StockHistory } from "../../types/stock";

type Props = {
  history: StockHistory[];
};

export default function StockTable({
  history,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border">
          <th className="p-3">Type</th>
          <th className="p-3">Quantity</th>
          <th className="p-3">Date</th>
        </tr>
      </thead>

      <tbody>
        {history.map((item) => (
          <tr
            key={item.id}
            className="border"
          >
            <td className="p-3">
              {item.type}
            </td>

            <td className="p-3">
              {item.quantity}
            </td>

            <td className="p-3">
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}