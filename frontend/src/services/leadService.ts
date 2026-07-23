import type { Lead } from "../types/lead";

import api from "../api/axios";


export const getLeads = async (): Promise<Lead[]> => {

  const res = await api.get("/leads");

  return res.data;

};



export const createLead = async (
  data: any
) => {

  const res = await api.post(
    "/leads",
    data
  );

  return res.data;

};

export const updateLead = async (
  id: string,
  data: any
) => {

  const res = await api.put(
    `/leads/${id}`,
    data
  );

  return res.data;
};

export const deleteLead = async (
  id: string
) => {

  const res = await api.delete(
    `/leads/${id}`
  );

  return res.data;

};