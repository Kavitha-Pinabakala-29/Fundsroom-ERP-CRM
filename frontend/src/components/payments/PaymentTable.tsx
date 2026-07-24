interface Props {

    payments:any[];

}


export default function PaymentTable({
    payments
}:Props){


    return (

        <table className="w-full border">


            <thead>

                <tr>

                    <th className="border p-2">
                        Customer
                    </th>

                    <th className="border p-2">
                        Amount
                    </th>

                    <th className="border p-2">
                        Method
                    </th>

                    <th className="border p-2">
                        Status
                    </th>

                    <th className="border p-2">
                        Date
                    </th>

                </tr>

            </thead>



            <tbody>


            {
                payments.length === 0 ? (

                    <tr>

                        <td
                        colSpan={5}
                        className="text-center p-4"
                        >

                            No payments found

                        </td>

                    </tr>


                ) : (


                    payments.map((payment)=>(
                        
                        <tr key={payment.id}>


                            <td className="border p-2">

                                {
                                    payment.customer?.name ||
                                    payment.order?.customer?.name ||
                                    payment.customerName ||
                                    payment.customer?.email ||
                                    "Unknown"
                                }

                            </td>


                            <td className="border p-2">

                                ₹ {payment.amount}
                            </td>


                            <td className="border p-2">

                                {
                                    payment.method || "-"
                                }

                            </td>


                            <td className="border p-2">

                                {
                                    payment.status || "-"
                                }

                            </td>


                            <td className="border p-2">

                                {
                                    payment.createdAt
                                    ?
                                    new Date(
                                        payment.createdAt
                                    ).toLocaleDateString()
                                    :
                                    "-"
                                }

                            </td>


                        </tr>

                    ))

                )

            }


            </tbody>


        </table>

    );

}