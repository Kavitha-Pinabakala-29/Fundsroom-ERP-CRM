type Props = {
  open: boolean;
  children: React.ReactNode;
};

function Modal({ open, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="rounded-xl bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>
  );
}

export default Modal;