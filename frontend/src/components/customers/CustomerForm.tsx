import { useState } from "react";

type Props = {
  onSubmit: (data: any) => void;
};

export default function CustomerForm({ onSubmit }: Props) {
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
        className="w-full rounded border p-2"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Phone"
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Company"
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
      />

      <input
        className="w-full rounded border p-2"
        placeholder="Address"
        onChange={(e) =>
          setForm({ ...form, address: e.target.value })
        }
      />

      <button
        className="w-full rounded bg-blue-600 p-3 text-white"
        onClick={() => onSubmit(form)}
      >
        Save Customer
      </button>

    </div>
  );
}