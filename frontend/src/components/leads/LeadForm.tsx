import { useEffect, useState } from "react";

import { getCustomers } from "../../services/customerService";

import type { Customer } from "../../types/customer";


type Props = {
  onSubmit: (data:any)=>void;
};


export default function LeadForm({
  onSubmit
}:Props){


  const [customers,setCustomers] =
    useState<Customer[]>([]);


  const [form,setForm] = useState({

    title:"",
    description:"",
    customerId:""

  });



  useEffect(()=>{

    async function loadCustomers(){

      const data =
        await getCustomers();

      setCustomers(data);

    }


    loadCustomers();


  },[]);



  return (

    <div className="space-y-3">


      <input

        className="w-full rounded border p-2"

        placeholder="Lead Title"

        onChange={(e)=>
          setForm({
            ...form,
            title:e.target.value
          })
        }

      />



      <textarea

        className="w-full rounded border p-2"

        placeholder="Description"

        onChange={(e)=>
          setForm({
            ...form,
            description:e.target.value
          })
        }

      />



      <select

        className="w-full rounded border p-2"

        value={form.customerId}

        onChange={(e)=>
          setForm({
            ...form,
            customerId:e.target.value
          })
        }

      >

        <option value="">
          Select Customer
        </option>


        {
          customers.map((customer)=>(

            <option
              key={customer.id}
              value={customer.id}
            >

              {customer.name}

            </option>

          ))
        }


      </select>



      <button

        className="w-full rounded bg-blue-600 p-3 text-white"

        onClick={()=>
          onSubmit(form)
        }

      >

        Save Lead

      </button>


    </div>

  );

}