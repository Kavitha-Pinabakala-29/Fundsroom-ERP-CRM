import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Product } from "../../types/product";

import { updateProduct } from "../../services/productService";

type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function EditProductModal({
  open,
  product,
  onClose,
  onSuccess,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    price: 0,
    stock: 0,
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        sku: product.sku,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product]);

  async function handleUpdate() {
    if (!product) return;

    try {
      await updateProduct(product.id, form);

      toast.success("Product Updated");

      onClose();

      onSuccess();
    } catch (err) {
      console.log(err);

      toast.error("Update Failed");
    }
  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Edit Product
      </h2>

      <div className="space-y-3">
        <input
          className="w-full rounded border p-2"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-2"
          value={form.sku}
          onChange={(e) =>
            setForm({ ...form, sku: e.target.value })
          }
        />

        <input
          type="number"
          className="w-full rounded border p-2"
          value={form.price}
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
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: Number(e.target.value),
            })
          }
        />

        <button
          onClick={handleUpdate}
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Update Product
        </button>
      </div>
    </Modal>
  );
}