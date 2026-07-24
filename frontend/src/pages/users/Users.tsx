import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import UserTable from "../../components/users/UserTable";

import AddUserModal from "../../components/users/AddUserModal";

import EditUserModal from "../../components/users/EditUserModal";

import DeleteUserModal from "../../components/users/DeleteUserModal";

import {
  getUsers,
  deleteUser,
} from "../../services/userManagementService";


export default function Users() {

  const [users, setUsers] = useState<any[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [selectedUser, setSelectedUser] =
    useState<any>(null);

  const [deleteTarget, setDeleteTarget] =
    useState<any>(null);


  const rowsPerPage = 5;


  async function loadUsers() {

    try {

      const data = await getUsers();

      setUsers(data);

    } catch (error) {

      console.log(error);

    }

  }


  useEffect(() => {

    loadUsers();

  }, []);



  async function handleDelete() {

    if (!deleteTarget)
      return;


    await deleteUser(deleteTarget.id);


    setDeleteTarget(null);


    loadUsers();

  }



  const filteredUsers =
    users.filter((user:any)=>

      user.name
      .toLowerCase()
      .includes(search.toLowerCase())

      ||

      user.email
      .toLowerCase()
      .includes(search.toLowerCase())

    );



  const paginatedUsers =
    filteredUsers.slice(

      (page-1)*rowsPerPage,

      page*rowsPerPage

    );



  return (

    <MainLayout>


      <div className="mb-6 flex justify-between items-center">


        <h1 className="text-3xl font-bold">
          User Management
        </h1>


        <AddUserModal
          onSuccess={loadUsers}
        />


      </div>



      <input

        className="mb-6 w-full rounded border p-2"

        placeholder="Search users..."

        value={search}

        onChange={(e)=>{

          setSearch(e.target.value);

          setPage(1);

        }}

      />



      <UserTable

        users={paginatedUsers}

        onEdit={setSelectedUser}

        onDelete={setDeleteTarget}

      />



      <div className="mt-6 flex gap-3">


        <button

          disabled={page===1}

          onClick={()=>setPage(page-1)}

          className="rounded bg-gray-300 px-4 py-2"

        >

          Previous

        </button>



        <button


          disabled={
            page >=
            Math.ceil(
              filteredUsers.length /
              rowsPerPage
            )
          }


          onClick={()=>setPage(page+1)}

          className="rounded bg-blue-600 px-4 py-2 text-white"

        >

          Next

        </button>


      </div>




      {
        selectedUser &&

        <EditUserModal

          user={selectedUser}

          onSuccess={()=>{

            setSelectedUser(null);

            loadUsers();

          }}

          onClose={()=>setSelectedUser(null)}

        />

      }



      {
        deleteTarget &&


        <DeleteUserModal

          user={deleteTarget}

          onConfirm={handleDelete}

          onClose={()=>setDeleteTarget(null)}

        />

      }



    </MainLayout>

  );

}