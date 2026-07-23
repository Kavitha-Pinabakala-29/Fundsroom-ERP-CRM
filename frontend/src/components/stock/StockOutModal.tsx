import toast from "react-hot-toast";

import Modal from "../ui/Modal";
import StockForm from "./StockForm";

import { stockOut } from "../../services/stockService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function StockOutModal({
  open,
  onClose,
  onSuccess,
}: Props) {

  async function handleSubmit(data: any) {

    try {

      await stockOut(data);

      toast.success("Stock Removed");

      onClose();

      onSuccess();

    } catch {

      toast.error("Failed");

    }

  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Stock Out
      </h2>

      <StockForm
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}