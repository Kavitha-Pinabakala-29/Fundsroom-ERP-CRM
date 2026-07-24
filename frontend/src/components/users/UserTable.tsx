import { useState } from "react";

import EditUserModal from "./EditUserModal";

import {
  deleteUser,
} from "../../services/userManagementService";

export default function UserTable({
  users,
}: any) {

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  async function handleDelete(
    id: string
  ) {

    if (
      !window.confirm(
        "Delete this user?"
      )
    )
      return;

    await deleteUser(id);

    alert("User deleted");

    window.location.reload();

  }

  return (

    <div className="rounded-lg bg-white p-6 shadow">

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            users.map((user: any) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td className="space-x-2">

                  <button
                    onClick={() =>
                      setSelectedUser(user)
                    }
                    className="rounded bg-blue-600 px-3 py-1 text-white"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(user.id)
                    }
                    className="rounded bg-red-600 px-3 py-1 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

      {

        selectedUser && (

          <div className="mt-8 border-t pt-6">

            <EditUserModal
              user={selectedUser}
            />

          </div>

        )

      }

    </div>

  );

}