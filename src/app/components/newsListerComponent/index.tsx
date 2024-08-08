/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import { Row} from "antd";
import TitleComponent from "../titleComponent";
import CardProduct from "../cardProductComponent";
import {dataMock} from "@/app/datamock";

export default function NewsListerComponent() {
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
        <CardProduct data={dataMock.slice(0, 6)}></CardProduct>
      </Row>
    </section>
  );
}
