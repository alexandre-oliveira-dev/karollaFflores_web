import {Categorys, Products} from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: "*",
  },
});

export const getCategorys = async () => {
  const res = await api.get<Categorys[]>(`/categorys`);
  return res.data;
};

export const getProducts = async () => {
  const res = await api.get<Products[]>(`/products`);
  return res.data;
};
