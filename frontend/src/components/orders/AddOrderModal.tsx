type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddOrderModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-[500px] rounded-lg bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">
          Add Order
        </h2>

        <p className="text-gray-500">
          Order form will be added here.
        </p>

        <button
          onClick={onClose}
          className="mt-5 rounded bg-red-600 px-4 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}