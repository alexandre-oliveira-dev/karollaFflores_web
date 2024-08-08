/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "./style.css";
import Title from "antd/es/typography/Title";
import {Products} from "@/types";
import imgExemple from "../../assets/prodExemple.png";
import {Button, Card, Row} from "antd";
import {formatter} from "@/app/common/priceFormatter";
import {MdOutlineShoppingCart} from "react-icons/md";
import TitleComponent from "../titleComponent";
import CardProduct from "../cardProductComponent";

const data: Pick<Products, "id" | "imgUrl" | "price" | "title">[] = [
  {
    id: "1",
    imgUrl: imgExemple.src,
    price: "50",
    title: "Buquê de Rosas Vermelhas 6 Unidades",
  },
  {
    id: "2",
    imgUrl: imgExemple.src,
    price: "50",
    title: "Buquê de Rosas Vermelhas 6 Unidades",
  },
  {
    id: "3",
    imgUrl: imgExemple.src,
    price: "50",
    title: "Buquê de Rosas Vermelhas 6 Unidades",
  },
];

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
        <CardProduct data={data}></CardProduct>
      </Row>
    </section>
  );
}
