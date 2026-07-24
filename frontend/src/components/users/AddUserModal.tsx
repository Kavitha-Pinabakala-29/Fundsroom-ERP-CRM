import { useState } from "react";

import {
  addUser,
} from "../../services/userManagementService";


interface AddUserModalProps {

  onSuccess: () => void;

}


export default function AddUserModal({

  onSuccess,

}: AddUserModalProps) {


  const [open, setOpen] = useState(false);


  const [formData, setFormData] = useState({

    name: "",

    email: "",

    password: "",

    role: "EMPLOYEE",

  });



  async function handleSubmit(
    e: React.FormEvent
  ) {


    e.preventDefault();


    try {


      await addUser(formData);



      // refresh users table

      onSuccess();



      // close modal

      setOpen(false);



      // reset form

      setFormData({

        name: "",

        email: "",

        password: "",

        role: "EMPLOYEE",

      });



    } catch(error) {


      console.log(error);


    }


  }



  return (

    <>


      <button

        onClick={()=>setOpen(true)}

        className="rounded bg-blue-600 px-4 py-2 text-white"

      >

        Add User

      </button>




      {
        open && (


          <div className="fixed inset-0 flex items-center justify-center bg-black/50">


            <div className="rounded-lg bg-white p-6 w-96">


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

                  value={formData.name}

                  onChange={(e)=>

                    setFormData({

                      ...formData,

                      name:e.target.value

                    })

                  }

                />





                <input

                  className="w-full rounded border p-2"

                  placeholder="Email"

                  type="email"

                  value={formData.email}

                  onChange={(e)=>

                    setFormData({

                      ...formData,

                      email:e.target.value

                    })

                  }

                />





                <input

                  className="w-full rounded border p-2"

                  placeholder="Password"

                  type="password"

                  value={formData.password}

                  onChange={(e)=>

                    setFormData({

                      ...formData,

                      password:e.target.value

                    })

                  }

                />





                <select

                  className="w-full rounded border p-2"

                  value={formData.role}

                  onChange={(e)=>

                    setFormData({

                      ...formData,

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

                    onClick={()=>setOpen(false)}

                    className="rounded bg-gray-300 px-4 py-2"

                  >

                    Cancel

                  </button>




                  <button

                    type="submit"

                    className="rounded bg-green-600 px-4 py-2 text-white"

                  >

                    Save

                  </button>


                </div>



              </form>


            </div>


          </div>


        )
      }



    </>

  );

}