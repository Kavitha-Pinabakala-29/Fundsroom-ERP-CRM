import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import UserTable from "../../components/users/UserTable";

import { getUsers } from "../../services/userManagementService";

import type { User } from "../../types/userManagement";

export default function Users() {

  const [users, setUsers] =
    useState<User[]>([]);

  async function loadUsers() {

    try {

      const data =
        await getUsers();

      setUsers(data);

    } catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadUsers();

  }, []);

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">

        User Management

      </h1>

      <UserTable
        users={users}
      />

    </MainLayout>

  );

}