import api from "../api/axios";


export const getPayments=()=>{

return api.get("/payments");

};


export const createPayment=(data:any)=>{

return api.post("/payments",data);

};


export const deletePayment=(id:string)=>{

return api.delete(`/payments/${id}`);

};