import { useState } from "react";

type Props = {
  onSubmit: (data: {
    productId: string;
    quantity: number;
  }) => void;
};

export default function StockForm({
  onSubmit,
}: Props) {

  const [form, setForm] = useState({
    productId: "",
    quantity: 0,
  });

  return (
    <div className="space-y-3">

      <input
        className="w-full rounded border p-2"
        placeholder="Product ID"
        onChange={(e) =>
          setForm({
            ...form,
            productId: e.target.value,
          })
        }
      />

      <input
        type="number"
        className="w-full rounded border p-2"
        placeholder="Quantity"
        onChange={(e) =>
          setForm({
            ...form,
            quantity: Number(e.target.value),
          })
        }
      />

      <button
        className="w-full rounded bg-blue-600 p-3 text-white"
        onClick={() => onSubmit(form)}
      >
        Save
      </button>

    </div>
  );
}