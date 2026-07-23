import toast from "react-hot-toast";

import Modal from "../ui/Modal";
import CustomerForm from "./CustomerForm";

import { createCustomer } from "../../services/customerService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddCustomerModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  async function handleSubmit(data: any) {
    try {
      await createCustomer(data);

      toast.success("Customer Added");

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
        Add Customer
      </h2>

      <CustomerForm onSubmit={handleSubmit} />
    </Modal>
  );
}