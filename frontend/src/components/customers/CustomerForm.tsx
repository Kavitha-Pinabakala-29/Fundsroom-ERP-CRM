import { useState } from "react";

type Props = {
  onSubmit: (data: any) => void;
};

export default function CustomerForm({
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  return (
    <div className="space-y-3">

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        placeholder="Phone"
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <button onClick={() => onSubmit(form)}>
        Save Customer
      </button>

    </div>
  );
}