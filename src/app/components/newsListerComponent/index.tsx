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
        {data?.map((item, index) => {
          return (
            <Card className="card-product" key={index}>
              <Row style={{justifyContent: "center"}}>
                <img
                  className="img-product"
                  src={item?.imgUrl}
                  alt={item?.title}
                />
              </Row>
              <Row style={{justifyContent: "center"}}>
                <Title
                  style={{width: "100%", fontSize: "1em", fontWeight: "normal"}}
                  level={5}
                >
                  {item?.title}
                </Title>
              </Row>
              <Row style={{justifyContent: "center"}}>
                <Title style={{color: "#0C9A00"}} level={3}>
                  {formatter(item?.price)}
                </Title>
              </Row>
              <Row style={{justifyContent: "center"}}>
                <Button>
                  <MdOutlineShoppingCart /> Adicionar no carrinho
                </Button>
              </Row>
            </Card>
          );
        })}
      </Row>
    </section>
  );
}
