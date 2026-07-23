export default function RecentCustomers({

  customers,

}: any) {

  return (

    <div className="rounded-lg bg-white p-5 shadow">

      <h2 className="mb-4 text-xl font-bold">

        Recent Customers

      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

          </tr>

        </thead>

        <tbody>

          {

            customers.map((customer: any) => (

              <tr key={customer.id}>

                <td>

                  {customer.name}

                </td>

                <td>

                  {customer.email}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}