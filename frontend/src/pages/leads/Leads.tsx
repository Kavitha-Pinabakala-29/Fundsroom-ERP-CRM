import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import { getLeads } from "../../services/leadService";

import type { Lead } from "../../types/lead";


function Leads() {


  const [leads,setLeads] =
    useState<Lead[]>([]);


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


      <div className="rounded border p-4">

        <p>
          Total Leads: {leads.length}
        </p>


        {leads.map((lead)=>(

          <div
            key={lead.id}
            className="border-b py-3"
          >

            <h2 className="font-semibold">
              {lead.title}
            </h2>


            <p>
              Customer:
              {" "}
              {lead.customer.name}
            </p>


            <p>
              Status:
              {" "}
              {lead.status}
            </p>


          </div>

        ))}

      </div>


    </MainLayout>

  );

}


export default Leads;