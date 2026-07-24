interface Props{

close:()=>void;

}


export default function EditPaymentModal({
close
}:Props){


return(

<div>

<h3>
Edit Payment
</h3>


<button onClick={close}>
Close
</button>


</div>

)

}