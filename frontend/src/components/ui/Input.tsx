type Props = {
  placeholder?: string;
  type?: string;
};

function Input({
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default Input;