import toast from "react-hot-toast";

import Modal from "../ui/Modal";

import LeadForm from "./LeadForm";

import { createLead } from "../../services/leadService";


type Props = {

  open:boolean;

  onClose:()=>void;

  onSuccess:()=>void;

};



export default function AddLeadModal({

  open,

  onClose,

  onSuccess,

}:Props){



  async function handleSubmit(data:any){

    try{

      await createLead(data);


      toast.success(
        "Lead Added"
      );


      onClose();


      onSuccess();


    }catch(error){

      console.log(error);


      toast.error(
        "Failed to add lead"
      );

    }

  }



  return (

    <Modal open={open}>

      <h2 className="mb-4 text-xl font-bold">
        Add Lead
      </h2>


      <LeadForm
        onSubmit={handleSubmit}
      />


    </Modal>

  );

}