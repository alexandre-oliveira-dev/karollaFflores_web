/* eslint-disable @next/next/no-img-element */
"use client";
import React, {useContext, useEffect, useState} from "react";
import "./style.css";
import {Row} from "antd";
import TitleComponent from "../titleComponent";
import CardProduct from "../cardProductComponent";
import {dataProviderContext} from "@/context/dataProvider";

export default function NewsListerComponent() {
  const {products} = useContext(dataProviderContext);

  return (
    <section className="container-newslister">
      <TitleComponent text="Novidades"></TitleComponent>

      <Row
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          gap: "20px",
        }}
      >
        <CardProduct
          data={products.filter(item => item?.isNewsLister).slice(0, 6)}
        ></CardProduct>
      </Row>
    </section>
  );
}
