"use client";
import {Row} from "antd";
import React, {useEffect, useState} from "react";
import "./style.css";
import {Products} from "@/types";
import {getProducts} from "@/service/api";
import CardProduct from "../cardProductComponent";
import TitleComponent from "../titleComponent";

interface Props {
  categoryId: number | undefined;
}

export default function RelatedProductsComponent({categoryId}: Props) {
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    async function get() {
      setData(
        (
          await getProducts({
            where: {categoryId: {equals: categoryId}},
          })
        ).response
      );
    }
    get();
    return () => {};
  }, [categoryId]);

  return (
    <section className="relatedProd-container">
      <TitleComponent
        fontWeight="400"
        text="Produtos relacionados"
      ></TitleComponent>
      <Row>{<CardProduct data={data}></CardProduct>}</Row>
    </section>
  );
}
