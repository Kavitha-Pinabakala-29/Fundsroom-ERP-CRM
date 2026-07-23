import api from "../api/axios";

import type { Product } from "../types/product";



export const getProducts = async (): Promise<Product[]> => {

  const res = await api.get("/products");

  return res.data;

};



export const createProduct = async (
  data:any
)=>{

  const res = await api.post(
    "/products",
    data
  );

  return res.data;

};



export const updateProduct = async (
  id:string,
  data:any
)=>{

  const res = await api.put(
    `/products/${id}`,
    data
  );

  return res.data;

};



export const deleteProduct = async (
  id:string
)=>{

  const res = await api.delete(
    `/products/${id}`
  );

  return res.data;

};