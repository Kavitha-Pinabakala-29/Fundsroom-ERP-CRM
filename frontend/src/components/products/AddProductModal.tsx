import toast from "react-hot-toast";

import Modal from "../ui/Modal";
import ProductForm from "./ProductForm";

import { createProduct } from "../../services/productService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddProductModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  async function handleSubmit(data: any) {
    try {
      await createProduct(data);

      toast.success("Product Added");

      onClose();

      onSuccess();
    } catch (err) {
      console.log(err);

      toast.error("Failed");
    }
  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Add Product
      </h2>

      <ProductForm onSubmit={handleSubmit} />
    </Modal>
  );
}