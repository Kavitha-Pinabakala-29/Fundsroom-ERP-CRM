import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Product } from "../../types/product";

import { deleteProduct } from "../../services/productService";

type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function DeleteProductDialog({
  open,
  product,
  onClose,
  onSuccess,
}: Props) {
  async function handleDelete() {
    if (!product) return;

    try {
      await deleteProduct(product.id);

      toast.success("Product Deleted");

      onClose();

      onSuccess();
    } catch (err) {
      console.log(err);

      toast.error("Delete Failed");
    }
  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Delete Product
      </h2>

      <p className="mb-5">
        Are you sure you want to delete this product?
      </p>

      <div className="flex gap-3">
        <button
          onClick={handleDelete}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Delete
        </button>

        <button
          onClick={onClose}
          className="rounded bg-gray-600 px-4 py-2 text-white"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}