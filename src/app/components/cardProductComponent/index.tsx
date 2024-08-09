/* eslint-disable @next/next/no-img-element */
"use client";
import {formatter} from "@/app/common/priceFormatter";
import {Products} from "@/types";
import {Button, Card, Row} from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import {MdOutlineShoppingCart} from "react-icons/md";
import "./style.css";

export default function CardProduct({
  data,
}: {
  data: Pick<Products, "id" | "imgUrl" | "price" | "title">[];
}) {
  return (
    <>
      {data?.map((item, index) => {
        console.log(item?.imgUrl);
        return (
          <Card className="card-product" key={index}>
            <Row style={{justifyContent: "center"}}>
              <img
                className="img-product"
                src={`data:image/*;base64,${item?.imgUrl}`}
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
    </>
  );
}
