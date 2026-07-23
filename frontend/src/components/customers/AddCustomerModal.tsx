import Modal from "../ui/Modal";
import CustomerForm from "./CustomerForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddCustomerModal({
  open,
  onClose,
}: Props) {
  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Add Customer
      </h2>

      <CustomerForm
        onSubmit={(data) => {
          console.log(data);
          onClose();
        }}
      />
    </Modal>
  );
}