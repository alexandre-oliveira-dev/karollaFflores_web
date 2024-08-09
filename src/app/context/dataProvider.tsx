"use client";
import {getCategorys, getProducts} from "@/service/api";
import {Categorys, Products} from "@/types";
import React, {createContext, useEffect, useState} from "react";

interface Props {
  data: Categorys[];
  setData?: React.Dispatch<React.SetStateAction<Categorys[]>>;
  products: Products[];
  setProducts?: React.Dispatch<React.SetStateAction<Products[]>>;
}

export const dataProviderContext = createContext({} as Props);

export default function DataProvider({children}: {children: React.ReactNode}) {
  const [data, setData] = useState<Categorys[]>([]);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function get() {
      const {response} = await getCategorys();
      const {response: responseProducts} = await getProducts();
      setData(response);
      setProducts(responseProducts);
    }

    get();
  }, []);

  return (
    <dataProviderContext.Provider
      value={{data, products, setData, setProducts}}
    >
      {children}
    </dataProviderContext.Provider>
  );
}
