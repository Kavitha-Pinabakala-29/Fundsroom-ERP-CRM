import { useState } from "react";

import {
  updateUser,
} from "../../services/userManagementService";


interface Props {

  user:any;

  onSuccess:()=>void;

  onClose:()=>void;

}


export default function EditUserModal({

  user,

  onSuccess,

  onClose,

}:Props){


  const [form,setForm] = useState({

    name:user.name,

    email:user.email,

    role:user.role,

  });



  async function handleSubmit(
    e:React.FormEvent
  ){

    e.preventDefault();


    try{


      await updateUser(

        user.id,

        form

      );


      alert(
        "User updated successfully"
      );


      onSuccess();


    }


    catch(error){


      console.log(error);


      alert(
        "Update failed"
      );


    }


  }



  return (

    <div className="fixed inset-0 flex items-center justify-center bg-black/50">


      <form

        onSubmit={handleSubmit}

        className="w-96 rounded-lg bg-white p-6 space-y-3"

      >


        <h2 className="text-xl font-bold">

          Edit User

        </h2>



        <input

          className="w-full rounded border p-2"

          value={form.name}

          onChange={(e)=>

            setForm({

              ...form,

              name:e.target.value

            })

          }

        />



        <input

          className="w-full rounded border p-2"

          value={form.email}

          onChange={(e)=>

            setForm({

              ...form,

              email:e.target.value

            })

          }

        />



        <select

          className="w-full rounded border p-2"

          value={form.role}

          onChange={(e)=>

            setForm({

              ...form,

              role:e.target.value

            })

          }

        >

          <option value="ADMIN">
            ADMIN
          </option>


          <option value="MANAGER">
            MANAGER
          </option>


          <option value="EMPLOYEE">
            EMPLOYEE
          </option>


        </select>




        <div className="flex justify-end gap-3">


          <button

            type="button"

            onClick={onClose}

            className="rounded bg-gray-300 px-4 py-2"

          >

            Cancel

          </button>



          <button

            className="rounded bg-green-600 px-4 py-2 text-white"

          >

            Save Changes

          </button>


        </div>


      </form>


    </div>

  );

}