import { useState } from "react";

import InvoiceForm from "./InvoiceForm";

import {
  createInvoice,
} from "../../services/invoiceService";

type Props = {
  open:boolean;
  onClose:()=>void;
  reload:()=>void;
};

export default function AddInvoiceModal({
  open,
  onClose,
  reload,
}:Props){

  const [form,setForm]=useState({
    customerId:"",
    total:0,
  });

  if(!open) return null;

  async function save(){

    await createInvoice(form);

    reload();

    onClose();

  }

  return(

<div className="fixed inset-0 flex items-center justify-center bg-black/50">

<div className="w-[450px] rounded-xl bg-white p-6">

<h2 className="mb-5 text-2xl font-bold">

Add Invoice

</h2>

<InvoiceForm
form={form}
setForm={setForm}
/>

<button
onClick={save}
className="mt-6 rounded bg-blue-600 px-5 py-2 text-white"
>

Save

</button>

</div>

</div>

);

}