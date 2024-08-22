/* eslint-disable @next/next/no-img-element */
"use client";
import {formatter} from "@/common/priceFormatter";
import {Products} from "@/types";
import {Button, Card, Row} from "antd";
import Title from "antd/es/typography/Title";
import React, {useContext} from "react";
import {MdOutlineShoppingCart} from "react-icons/md";
import "./style.css";
import Link from "antd/es/typography/Link";
import {dataProviderContext} from "@/context/dataProvider";

export default function CardProduct({
  data,
}: {
  data: Pick<Products, "id" | "Photos" | "price" | "title">[];
}) {
  const {addItemCart} = useContext(dataProviderContext);

  return (
    <>
      {data?.map((item, index) => {
        return (
          <Card className="card-product" key={index}>
            <Row style={{justifyContent: "center"}}>
              <Link
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                href={`/produto/${item?.id}`}
              >
                <img
                  className="img-product"
                  src={`data:image/*;base64,${item?.Photos[0]?.imgBase64}`}
                  alt={item?.title}
                />
              </Link>
            </Row>
            <Row style={{justifyContent: "center", textAlign: "center"}}>
              <Title
                style={{width: "100%", fontSize: "1em", fontWeight: "normal"}}
                level={5}
              >
                {item?.title}
              </Title>
            </Row>
            <Row style={{justifyContent: "center", textAlign: "center"}}>
              <Title style={{color: "#0C9A00"}} level={3}>
                {formatter(item?.price)}
              </Title>
            </Row>
            <Row style={{justifyContent: "center", textAlign: "center"}}>
              <Button
                onClick={() => {
                  if (item)
                    addItemCart({
                      id: item.id,
                      img: item.Photos[0].imgBase64,
                      price: item.price,
                      qtd: 1,
                      title: item.title,
                    });
                }}
              >
                <MdOutlineShoppingCart /> Adicionar no carrinho
              </Button>
            </Row>
          </Card>
        );
      })}
    </>
  );
}
