import {ProductsFindManyArgs} from "@/prismaTypes";
import {Categorys, Products} from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://karolla-flores-api.vercel.app/",
  // baseURL: "http://localhost:5000/",
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

export const getProducts = async (where: ProductsFindManyArgs) => {
  const res = await api.post<FindManyResponse<Products>>(`/getProducts`, where);
  return res.data;
};

export const getProduct = async ({id}: {id: number}) => {
  const res = await api.get<Products>(`/product/${id}`);
  return res.data;
};

export const tokenVerify = async ({token}: {token: string}) => {
  const res = await api.get<{tokenIsValid: boolean}>(`/authVerify`, {
    headers: {
      token,
    },
  });
  return res.data;
};

export const getToken = async () => {
  const res = await api.post<{token: string; userMail: string}>(`/auth`, {
    email: "ale@gmail.com",
    password: "123123",
  });
  return res.data;
};
