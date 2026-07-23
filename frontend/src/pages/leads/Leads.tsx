import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import { getLeads } from "../../services/leadService";

import type { Lead } from "../../types/lead";

import LeadTable from "../../components/leads/LeadTable";

import AddLeadModal from "../../components/leads/AddLeadModal";


function Leads() {


  const [leads, setLeads] =
    useState<Lead[]>([]);


  const [open, setOpen] =
    useState(false);



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



      <LeadTable

        leads={leads}


        onEdit={(lead: Lead)=>{

          console.log(
            "Edit lead",
            lead
          );

        }}



        onDelete={(lead: Lead)=>{

          console.log(
            "Delete lead",
            lead
          );

        }}

      />


    </MainLayout>

  );

}



export default Leads;