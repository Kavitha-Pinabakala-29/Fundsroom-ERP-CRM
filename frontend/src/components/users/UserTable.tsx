import { useState } from "react";

import EditUserModal from "./EditUserModal";

export default function UserTable({
  users,
}: any) {

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  return (

    <div className="rounded-lg bg-white p-5 shadow">

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {

            users.map((user: any) => (

              <tr key={user.id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>

                  <button
                    onClick={() =>
                      setSelectedUser(user)
                    }
                    className="rounded bg-blue-600 px-3 py-1 text-white"
                  >
                    Edit
                  </button>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

      {

        selectedUser && (

          <div className="mt-6 border-t pt-6">

            <EditUserModal
              user={selectedUser}
            />

          </div>

        )

      }

    </div>

  );

}