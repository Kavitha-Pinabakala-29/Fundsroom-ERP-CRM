import PaymentForm from "./PaymentForm";


interface Props{

close:()=>void;

refresh:()=>void;

}


export default function AddPaymentModal({
close,
refresh
}:Props){


return(

<div>

<PaymentForm

onSubmit={()=>{

refresh();

close();

}}

/>


<button onClick={close}>
Cancel
</button>


</div>

)

}