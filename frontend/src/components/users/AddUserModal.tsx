import { useState } from "react";

import { addUser } from "../../services/userManagementService";

export default function AddUserModal() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "SALES",
  });

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await addUser(form);

      alert("User created successfully");

      window.location.reload();

    } catch (err) {

      console.log(err);

      alert("Failed to create user");

    }

  }

  return (

    <div className="rounded-lg bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        Add User
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >

        <input
          className="w-full rounded border p-2"
          placeholder="Name"
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
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          className="w-full rounded border p-2"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
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
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Create User
        </button>

      </form>

    </div>

  );

}