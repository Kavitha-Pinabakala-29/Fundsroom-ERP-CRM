import { useState } from "react";

type Props = {
  onSubmit: (data: any) => void;
};

export default function ProductForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: 0,
    stock: 0,
  });

  return (
    <div className="space-y-3">
      <input
        className="w-full rounded border p-2"
        placeholder="Product Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="SKU"
        onChange={(e) =>
          setForm({ ...form, sku: e.target.value })
        }
      />

      <input
        type="number"
        className="w-full rounded border p-2"
        placeholder="Price"
        onChange={(e) =>
          setForm({
            ...form,
            price: Number(e.target.value),
          })
        }
      />

      <input
        type="number"
        className="w-full rounded border p-2"
        placeholder="Stock"
        onChange={(e) =>
          setForm({
            ...form,
            stock: Number(e.target.value),
          })
        }
      />

      <button
        className="w-full rounded bg-blue-600 p-3 text-white"
        onClick={() => onSubmit(form)}
      >
        Save Product
      </button>
    </div>
  );
}