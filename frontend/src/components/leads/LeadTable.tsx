import type { Lead } from "../../types/lead";


type Props = {
  leads: Lead[];

  onEdit: (lead: Lead) => void;

  onDelete: (lead: Lead) => void;
};


export default function LeadTable({
  leads,
  onEdit,
  onDelete,
}: Props) {


  return (

    <table className="w-full border">

      <thead>

        <tr className="border">

          <th className="p-3">
            Title
          </th>

          <th className="p-3">
            Customer
          </th>

          <th className="p-3">
            Status
          </th>

          <th className="p-3">
            Assigned To
          </th>

          <th className="p-3">
            Actions
          </th>

        </tr>

      </thead>


      <tbody>

        {
          leads.map((lead)=>(

            <tr
              key={lead.id}
              className="border"
            >

              <td className="p-3">
                {lead.title}
              </td>


              <td className="p-3">
                {lead.customer.name}
              </td>


              <td className="p-3">
                {lead.status}
              </td>


              <td className="p-3">

                {
                  lead.salesUser
                  ? lead.salesUser.name
                  : "Not Assigned"
                }

              </td>


              <td className="p-3 space-x-2">


                <button

                  onClick={() => onEdit(lead)}

                  className="rounded bg-yellow-500 px-3 py-1 text-white"

                >
                  Edit
                </button>



                <button

                  onClick={() => onDelete(lead)}

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

  );

}