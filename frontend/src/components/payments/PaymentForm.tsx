import {useState} from "react";


interface Props{

onSubmit:(data:any)=>void;

}


export default function PaymentForm({
onSubmit
}:Props){


const [form,setForm]=useState({

invoiceId:"",
amount:"",
method:"UPI"

});


return(

<form
onSubmit={(e)=>{

e.preventDefault();

onSubmit({

...form,

amount:Number(form.amount)

});

}}

>


<input

placeholder="Invoice ID"

value={form.invoiceId}

onChange={(e)=>
setForm({
...form,
invoiceId:e.target.value
})
}

/>


<input

placeholder="Amount"

value={form.amount}

onChange={(e)=>
setForm({
...form,
amount:e.target.value
})
}

/>


<select

value={form.method}

onChange={(e)=>
setForm({
...form,
method:e.target.value
})
}

>

<option>
UPI
</option>

<option>
CARD
</option>

<option>
CASH
</option>


</select>


<button>
Save Payment
</button>


</form>

)

}