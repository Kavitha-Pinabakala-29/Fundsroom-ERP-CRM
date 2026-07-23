import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import OrderForm from "./OrderForm";

import { createOrder } from "../../services/orderService";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddOrderModal({

  open,

  onClose,

  onSuccess,

}: Props) {

  async function handleSubmit(data: {
    customerId: string;
    items: {
      productId: string;
      quantity: number;
    }[];
  }) {

    try {

      await createOrder(data);

      toast.success("Order Created");

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

        Create Order

      </h2>

      <OrderForm onSubmit={handleSubmit} />

    </Modal>

  );

}