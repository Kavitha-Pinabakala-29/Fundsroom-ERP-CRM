import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import UserTable from "../../components/users/UserTable";

import AddUserModal from "../../components/users/AddUserModal";

import { getUsers } from "../../services/userManagementService";

export default function Users() {

  const [users, setUsers] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const rowsPerPage = 5;

  async function loadUsers() {

    try {

      const data = await getUsers();

      setUsers(data);

    }

    catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadUsers();

  }, []);

  const filteredUsers = users.filter((user: any) =>

    user.name
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    user.email
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  const paginatedUsers = filteredUsers.slice(

    (page - 1) * rowsPerPage,

    page * rowsPerPage

  );

  return (

    <MainLayout>

      <div className="mb-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold">

          User Management

        </h1>

        <AddUserModal />

      </div>

      <input
        className="mb-6 w-full rounded border p-2"
        placeholder="Search users..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <UserTable
        users={paginatedUsers}
      />

      <div className="mt-6 flex gap-3">

        <button
          onClick={() =>
            setPage(page - 1)
          }
          disabled={page === 1}
          className="rounded bg-gray-300 px-4 py-2"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setPage(page + 1)
          }
          disabled={
            page >=
            Math.ceil(
              filteredUsers.length /
              rowsPerPage
            )
          }
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Next
        </button>

      </div>

    </MainLayout>

  );

}