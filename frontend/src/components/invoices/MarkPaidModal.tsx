import {
  markInvoicePaid,
} from "../../services/invoiceService";

type Props={
 invoice:any;
 open:boolean;
 onClose:()=>void;
 reload:()=>void;
};

export default function MarkPaidModal({
 invoice,
 open,
 onClose,
 reload,
}:Props){

 if(!open) return null;

 async function confirm(){

   await markInvoicePaid(invoice.id);

   reload();

   onClose();

 }

 return(

<div className="fixed inset-0 flex items-center justify-center bg-black/50">

<div className="rounded-xl bg-white p-6">

<h2 className="text-xl font-bold">

Mark invoice as paid?

</h2>

<div className="mt-6 flex gap-3">

<button
onClick={confirm}
className="rounded bg-green-600 px-4 py-2 text-white"
>

Yes

</button>

<button
onClick={onClose}
className="rounded bg-gray-500 px-4 py-2 text-white"
>

Cancel

</button>

</div>

</div>

</div>

);

}