import Modal from "../ui/Modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DeleteCustomerDialog({
  open,
  onClose,
}: Props) {
  return (
    <Modal open={open}>
      <h2 className="mb-4 text-xl font-bold">
        Delete Customer
      </h2>

      <p className="mb-5">
        Are you sure?
      </p>

      <div className="flex gap-3">
        <button
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