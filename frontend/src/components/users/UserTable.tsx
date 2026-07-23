import type { User } from "../../types/userManagement";

type Props = {
  users: User[];
};

export default function UserTable({
  users,
}: Props) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Users
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-2 text-left">
              Name
            </th>

            <th className="text-left">
              Email
            </th>

            <th className="text-left">
              Role
            </th>

            <th className="text-left">
              Joined
            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b"
            >

              <td className="py-3">
                {user.name}
              </td>

              <td>
                {user.email}
              </td>

              <td>
                {user.role}
              </td>

              <td>
                {new Date(
                  user.createdAt
                ).toLocaleDateString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}