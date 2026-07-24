import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import PaymentTable from "../../components/payments/PaymentTable";

import { getPayments } from "../../services/paymentService";


export default function Payments() {


  const [payments, setPayments] = useState<any[]>([]);



  async function loadPayments() {

    try {

      const response:any = await getPayments();

      setPayments(response.data || response);

    }

    catch(error) {

      console.log(error);

    }

  }



  useEffect(() => {

    loadPayments();

  }, []);




  return (

    <MainLayout>


      <div className="p-6">


        <div className="flex justify-between items-center mb-6">


          <h1 className="text-3xl font-bold">

            Payments

          </h1>



        </div>



        <PaymentTable

          payments={payments}

        />


      </div>


    </MainLayout>

  );

}