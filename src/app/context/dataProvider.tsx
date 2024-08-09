"use client";
import { getCategorys } from "@/service/api";
import {Categorys} from "@/types";
import React, {createContext, useEffect, useState} from "react";

interface Props {
  data: Categorys[];
  setData?: React.Dispatch<React.SetStateAction<Categorys[]>>;
}

export const dataProviderContext = createContext({} as Props);

export default function DataProvider({children}: {children: React.ReactNode}) {
  const [data, setData] = useState<Categorys[]>([]);

  useEffect(() => {
    async function get() {
      const {response} = await getCategorys();
      setData(response);
    }
    get();
  }, []);

  return (
    <dataProviderContext.Provider value={{data}}>
      {children}
    </dataProviderContext.Provider>
  );
}
