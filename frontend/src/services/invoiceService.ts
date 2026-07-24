import api from "../api/axios";

export async function getInvoices() {
  const res = await api.get("/invoices");
  return res.data;
}

export async function createInvoice(data: any) {
  const res = await api.post("/invoices", data);
  return res.data;
}

export async function updateInvoice(
  id: string,
  data: any
) {
  const res = await api.put(`/invoices/${id}`, data);
  return res.data;
}

export async function deleteInvoice(id: string) {
  const res = await api.delete(`/invoices/${id}`);
  return res.data;
}

export async function markInvoicePaid(id: string) {
  const res = await api.patch(
    `/invoices/${id}/pay`
  );

  return res.data;
}