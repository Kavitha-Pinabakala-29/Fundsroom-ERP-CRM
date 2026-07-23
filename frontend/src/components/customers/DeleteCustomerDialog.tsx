import Modal from "../ui/Modal";
import type { Customer } from "../../types/customer";

type Props = {
  open: boolean;
  customer: Customer | null;
  onClose: () => void;
  onSuccess: () => void;
};

export default function DeleteCustomerDialog({
  open,
  customer,
  onClose,
  onSuccess,
}: Props) {

  async function handleDelete() {
    if (!customer) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/customers/${customer.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      onSuccess();
      onClose();

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Modal open={open}>

      <h2 className="mb-4 text-xl font-bold">
        Delete Customer
      </h2>

      <p className="mb-5">
        Are you sure you want to delete{" "}
        <b>{customer?.name}</b>?
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