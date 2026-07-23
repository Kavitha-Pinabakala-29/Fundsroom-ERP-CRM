import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import { getLeads } from "../../services/leadService";

import type { Lead } from "../../types/lead";

import LeadTable from "../../components/leads/LeadTable";

import AddLeadModal from "../../components/leads/AddLeadModal";

import EditLeadModal from "../../components/leads/EditLeadModal";

import DeleteLeadDialog from "../../components/leads/DeleteLeadDialog";

function Leads() {


  const [leads, setLeads] =
    useState<Lead[]>([]);

  const [open, setOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [deleteOpen,setDeleteOpen] =
  useState(false);

  const [deleteLeadItem,setDeleteLeadItem] =
  useState<Lead | null>(null);

  async function loadLeads(){

    try{

      const data =
        await getLeads();

      setLeads(data);


    }catch(error){

      console.error(error);

    }

  }




  useEffect(()=>{

    loadLeads();

  },[]);




  return (

    <MainLayout>


      <h1 className="mb-6 text-3xl font-bold">
        Leads
      </h1>




      <button

        onClick={() => setOpen(true)}

        className="mb-5 rounded bg-blue-600 px-4 py-2 text-white"

      >

        + Add Lead

      </button>





      <AddLeadModal

        open={open}

        onClose={() => setOpen(false)}

        onSuccess={loadLeads}

      />





      <EditLeadModal

        open={editOpen}

        lead={selectedLead}

        onClose={() => setEditOpen(false)}

        onSuccess={loadLeads}

      />

      <DeleteLeadDialog
        open={deleteOpen}
        lead={deleteLeadItem}
        onClose={()=>setDeleteOpen(false)}
        onSuccess={loadLeads}
      />

      <LeadTable

        leads={leads}



        onEdit={(lead: Lead)=>{


          setSelectedLead(lead);


          setEditOpen(true);



        }}




      onDelete={(lead: Lead)=>{
        setDeleteLeadItem(lead);
        setDeleteOpen(true);
      }}



      />



    </MainLayout>

  );

}

export default Leads;