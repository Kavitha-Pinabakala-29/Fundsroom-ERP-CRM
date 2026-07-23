import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import UserTable from "../../components/users/UserTable";
import AddUserModal from "../../components/users/AddUserModal";

import {
  getUsers,
} from "../../services/userManagementService";

import type { User } from "../../types/userManagement";

export default function Users() {

  const [users, setUsers] =
    useState<User[]>([]);

  async function loadUsers() {

    const data =
      await getUsers();

    setUsers(data);

  }

  useEffect(() => {

    loadUsers();

  }, []);

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">

        User Management

      </h1>

      <AddUserModal />

      <div className="mt-6">

        <UserTable
          users={users}
        />

      </div>

    </MainLayout>

  );

}