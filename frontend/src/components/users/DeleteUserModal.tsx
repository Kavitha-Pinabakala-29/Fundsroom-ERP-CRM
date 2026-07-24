import React from "react";


interface DeleteUserModalProps {

  user:any;

  onConfirm:()=>void;

  onClose:()=>void;

}


export default function DeleteUserModal({

  user,

  onConfirm,

  onClose,

}:DeleteUserModalProps){


  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/50">


      <div className="rounded-lg bg-white p-6 w-96">


        <h2 className="text-xl font-bold mb-4">

          Delete User

        </h2>



        <p className="mb-6">

          Are you sure you want to delete

          <b> {user.name}</b> ?

        </p>



        <div className="flex justify-end gap-3">


          <button

            onClick={onClose}

            className="rounded bg-gray-300 px-4 py-2"

          >

            Cancel

          </button>



          <button

            onClick={onConfirm}

            className="rounded bg-red-600 px-4 py-2 text-white"

          >

            Delete

          </button>


        </div>


      </div>


    </div>

  );

}