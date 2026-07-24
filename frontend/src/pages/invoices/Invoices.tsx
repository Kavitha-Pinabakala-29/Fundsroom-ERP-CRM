import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import InvoiceTable from "../../components/invoices/InvoiceTable";
import AddInvoiceModal from "../../components/invoices/AddInvoiceModal";

import { getInvoices } from "../../services/invoiceService";


export default function Invoices() {


  const [invoices, setInvoices] = useState<any[]>([]);

  const [open, setOpen] = useState(false);



  async function loadInvoices() {

    try {

      const response:any = await getInvoices();

      setInvoices(response.data || response);

    }

    catch(error) {

      console.log(error);

    }

  }



  useEffect(() => {

    loadInvoices();

  }, []);




  return (

    <MainLayout>


      <div className="p-6">


        <div className="flex justify-between items-center mb-6">


          <h1 className="text-3xl font-bold">

            Invoices

          </h1>



          <button

            onClick={() => setOpen(true)}

            className="bg-blue-600 text-white px-4 py-2 rounded"

          >

            + Add Invoice

          </button>



        </div>




        <InvoiceTable

          invoices={invoices}

          refresh={loadInvoices}

        />





        {

          open &&

          <AddInvoiceModal

            close={() => setOpen(false)}

            refresh={loadInvoices}

          />

        }



      </div>


    </MainLayout>

  );

}