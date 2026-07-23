import { useState } from "react";

type Props = {
  onSubmit: (data: {
    customerId: string;
    items: {
      productId: string;
      quantity: number;
    }[];
  }) => void;
};

export default function OrderForm({
  onSubmit,
}: Props) {

  const [customerId, setCustomerId] = useState("");

  const [productId, setProductId] = useState("");

  const [quantity, setQuantity] = useState(1);

  return (

    <div className="space-y-3">

      <input
        className="w-full rounded border p-2"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) =>
          setCustomerId(e.target.value)
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Product ID"
        value={productId}
        onChange={(e) =>
          setProductId(e.target.value)
        }
      />

      <input
        type="number"
        className="w-full rounded border p-2"
        value={quantity}
        onChange={(e) =>
          setQuantity(Number(e.target.value))
        }
      />

      <button
        className="w-full rounded bg-blue-600 p-3 text-white"
        onClick={() =>
          onSubmit({
            customerId,
            items: [
              {
                productId,
                quantity,
              },
            ],
          })
        }
      >
        Save Order
      </button>

    </div>

  );

}