"use client";
import {getCategorys, getProducts} from "@/service/api";
import {Categorys, Products} from "@/types";
import React, {createContext, useEffect, useState} from "react";

interface Props {
  categorys: Categorys[];
  setCategorys?: React.Dispatch<React.SetStateAction<Categorys[]>>;
  products: Products[];
  setProducts?: React.Dispatch<React.SetStateAction<Products[]>>;
}

export const dataProviderContext = createContext({} as Props);

export default function DataProvider({children}: {children: React.ReactNode}) {
  const [categorys, setCategorys] = useState<Categorys[]>([]);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function get() {
      const [{response: dataCategorys}, {response: dataProducts}] =
        await Promise.all([await getCategorys(), await getProducts({})]);

      setCategorys(dataCategorys);
      setProducts(dataProducts);
    }

    get();
  }, []);

  return (
    <dataProviderContext.Provider
      value={{categorys, setCategorys, products, setProducts}}
    >
      {children}
    </dataProviderContext.Provider>
  );
}
