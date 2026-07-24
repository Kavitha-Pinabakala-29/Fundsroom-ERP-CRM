export default function UserTable({

  users,

  onEdit,

  onDelete,

}:any) {


  return (

    <div className="rounded-lg bg-white p-6 shadow">


      <table className="w-full">


        <thead>


          <tr className="border-b">


            <th className="p-3 text-left">
              Name
            </th>


            <th className="p-3 text-left">
              Email
            </th>


            <th className="p-3 text-left">
              Role
            </th>


            <th className="p-3 text-left">
              Actions
            </th>


          </tr>


        </thead>



        <tbody>


        {

          users.map((user:any)=>(


            <tr

              key={user.id}

              className="border-b"


            >


              <td className="p-3">

                {user.name}

              </td>



              <td className="p-3">

                {user.email}

              </td>



              <td className="p-3">

                {user.role}

              </td>



              <td className="p-3 space-x-2">



                <button

                  onClick={()=>onEdit(user)}

                  className="rounded bg-blue-600 px-3 py-1 text-white"

                >

                  Edit

                </button>




                <button

                  onClick={()=>onDelete(user)}

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


    </div>

  );

}