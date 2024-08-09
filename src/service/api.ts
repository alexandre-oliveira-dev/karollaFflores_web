import {Categorys, Products} from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://karolla-flores-api.vercel.app/",
  headers: {
    Authorization: "*",
  },
  timeout: 10000,
});

type FindManyResponse<t> = {
  pageInfo: {
    total: string;
    hasNextPage: boolean;
    currentPage: number;
    lastPage: number;
  };
  response: t[];
};

export const getCategorys = async (): Promise<FindManyResponse<Categorys>> => {
  const res = await api.get<FindManyResponse<Categorys>>(`/categorys`);
  return res.data;
};

export const getProducts = async () => {
  const res = await api.get<Products[]>(`/products`);
  return res.data;
};
