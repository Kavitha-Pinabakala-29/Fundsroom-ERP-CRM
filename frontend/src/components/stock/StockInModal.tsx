import toast from "react-hot-toast";

import Modal from "../ui/Modal";
import StockForm from "./StockForm";

import { stockIn } from "../../services/stockService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function StockInModal({
  open,
  onClose,
  onSuccess,
}: Props) {

  async function handleSubmit(data: any) {

    try {

      await stockIn(data);

      toast.success("Stock Added");

      onClose();

      onSuccess();

    } catch {

      toast.error("Failed");

    }

  }

  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Stock In
      </h2>

      <StockForm
        onSubmit={handleSubmit}
      />
    </Modal>
  );
}