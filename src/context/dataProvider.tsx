"use client";
import {getCategorys, getProducts} from "@/service/api";
import {Categorys, Products} from "@/types";
import React, {createContext, useEffect, useState} from "react";

type InsertLocalStorageProps = {
  id: number;
  title: string;
  price: string;
  img: string;
  qtd: number;
};
interface Props {
  categorys: Categorys[];
  setCategorys?: React.Dispatch<React.SetStateAction<Categorys[]>>;
  products: Products[];
  setProducts?: React.Dispatch<React.SetStateAction<Products[]>>;
  addItemCart: (item: InsertLocalStorageProps) => void;
}

export const dataProviderContext = createContext({} as Props);

export default function DataProvider({children}: {children: React.ReactNode}) {
  const [categorys, setCategorys] = useState<Categorys[]>([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    async function get() {
      const [{response: dataCategorys}, {response: dataProducts}] =
        await Promise.all([await getCategorys(), await getProducts({})]);

      setCategorys(dataCategorys);
      setProducts(dataProducts);
    }
    get();
  }, []);

  function addItemCart(item: InsertLocalStorageProps) {
    let currentCart =
      (JSON.parse(
        localStorage.getItem("karollaflores_cart") as string
      ) as InsertLocalStorageProps[]) || [];

    if (currentCart.find(i => i.id === item.id)) {
      const itemUpdate = currentCart[currentCart.findIndex(i => i.id === item.id)];
      let cartCopy = currentCart.filter(i => i.id !== itemUpdate?.id);
      cartCopy.push({
        ...itemUpdate,
        qtd: itemUpdate.qtd + 1,
      });
      localStorage.setItem("karollaflores_cart", JSON.stringify(cartCopy));
      return;
    }

    currentCart.push(item);
    localStorage.setItem("karollaflores_cart", JSON.stringify(currentCart));
    setCart(currentCart);
  }

  return (
    <dataProviderContext.Provider
      value={{categorys, setCategorys, products, setProducts, addItemCart}}
    >
      {children}
    </dataProviderContext.Provider>
  );
}
