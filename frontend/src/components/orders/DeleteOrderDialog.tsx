import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Order } from "../../types/order";

import { deleteOrder } from "../../services/orderService";

type Props = {

  open: boolean;

  order: Order | null;

  onClose: () => void;

  onSuccess: () => void;

};

export default function DeleteOrderDialog({

  open,

  order,

  onClose,

  onSuccess,

}: Props) {

  async function handleDelete() {

    if (!order) return;

    try {

      await deleteOrder(order.id);

      toast.success("Order Deleted");

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

        Delete Order

      </h2>

      <p>

        Delete this order?

      </p>

      <div className="mt-5 flex gap-3">

        <button

          onClick={handleDelete}

          className="rounded bg-red-600 px-4 py-2 text-white"

        >

          Delete

        </button>

        <button

          onClick={onClose}

          className="rounded bg-gray-400 px-4 py-2 text-white"

        >

          Cancel

        </button>

      </div>

    </Modal>

  );

}