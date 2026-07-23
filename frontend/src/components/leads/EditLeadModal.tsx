import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Lead } from "../../types/lead";

import { updateLead } from "../../services/leadService";


type Props = {

  open:boolean;

  lead:Lead | null;

  onClose:()=>void;

  onSuccess:()=>void;

};



export default function EditLeadModal({

  open,

  lead,

  onClose,

  onSuccess,

}:Props){



  const [form,setForm] = useState({

    title:"",

    description:"",

    customerId:""

  });



  useEffect(()=>{


    if(lead){

      setForm({

        title:lead.title,

        description:lead.description ?? "",

        customerId:lead.customerId

      });

    }


  },[lead]);




  async function handleUpdate(){


    if(!lead) return;



    try{


      await updateLead(

        lead.id,

        form

      );



      toast.success(
        "Lead Updated"
      );



      onClose();



      onSuccess();



    }catch(error){


      console.log(error);


      toast.error(
        "Update Failed"
      );


    }


  }



  return (

    <Modal open={open}>


      <h2 className="mb-4 text-xl font-bold">
        Edit Lead
      </h2>



      <div className="space-y-3">


        <input

          className="w-full rounded border p-2"

          value={form.title}

          onChange={(e)=>

            setForm({

              ...form,

              title:e.target.value

            })

          }

        />



        <textarea

          className="w-full rounded border p-2"

          value={form.description}

          onChange={(e)=>

            setForm({

              ...form,

              description:e.target.value

            })

          }

        />



        <input

          className="w-full rounded border p-2"

          value={form.customerId}

          disabled

        />

        <button
          onClick={handleUpdate}
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Update Lead
        </button>
      </div>
    </Modal>
  );

}