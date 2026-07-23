import type { Lead } from "../types/lead";


const API_URL =
  "http://localhost:5000/api/leads";


function getToken(){

  return localStorage.getItem("token");

}


export async function getLeads():Promise<Lead[]>{

  const response = await fetch(API_URL,{
    headers:{
      Authorization:`Bearer ${getToken()}`
    }
  });


  if(!response.ok){
    throw new Error("Failed to fetch leads");
  }


  return response.json();

}