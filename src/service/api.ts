import {Categorys} from "@/types";
import {notification} from "antd";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: "*",
  },
  timeout:10000
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

export const getCategorys = async () => {
  try {
    const res = await api.get<FindManyResponse<Categorys>>(`/categorys`);
    return res.data;
  } catch (err) {
    return notification.error({message: "Ops ocorreu algum erro."});
  }
};
