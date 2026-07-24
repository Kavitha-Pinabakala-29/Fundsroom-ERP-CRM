import { useState } from "react";

import { updateUser } from "../../services/userManagementService";

export default function EditUserModal({
  user,
}: any) {

  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await updateUser(
        user.id,
        form
      );

      alert("User updated successfully");

      window.location.reload();

    }

    catch (err) {

      console.log(err);

      alert("Update failed");

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-2"
    >

      <input
        className="w-full rounded border p-2"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded border p-2"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <select
        className="w-full rounded border p-2"
        value={form.role}
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
      >
        <option>ADMIN</option>
        <option>SALES</option>
        <option>WAREHOUSE</option>
        <option>ACCOUNTS</option>
      </select>

      <button
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        Save Changes
      </button>

    </form>

  );

}