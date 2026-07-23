type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      {children}
    </div>
  );
}

export default Card;