import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import type { Lead } from "../../types/lead";

import { deleteLead } from "../../services/leadService";


type Props = {

  open:boolean;

  lead:Lead | null;

  onClose:()=>void;

  onSuccess:()=>void;

};



export default function DeleteLeadDialog({

  open,

  lead,

  onClose,

  onSuccess,

}:Props){



  async function handleDelete(){


    if(!lead) return;



    try{


      await deleteLead(
        lead.id
      );


      toast.success(
        "Lead Deleted"
      );


      onClose();


      onSuccess();



    }catch(error){


      console.log(error);


      toast.error(
        "Delete Failed"
      );


    }


  }




  return (

    <Modal open={open}>


      <h2 className="mb-4 text-xl font-bold">
        Delete Lead
      </h2>



      <p className="mb-5">

        Are you sure you want to delete this lead?

      </p>




      <div className="flex gap-3">


        <button

          onClick={handleDelete}

          className="rounded bg-red-600 px-4 py-2 text-white"

        >

          Delete

        </button>



        <button

          onClick={onClose}

          className="rounded bg-gray-600 px-4 py-2 text-white"

        >

          Cancel

        </button>


      </div>



    </Modal>

  );

}