type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return (
    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
      {text}
    </span>
  );
}

export default Badge;