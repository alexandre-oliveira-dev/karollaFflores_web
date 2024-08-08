"use client";

import React, {useState} from "react";
import "./style.css";
import TitleComponent from "../titleComponent";
import {Button, Row} from "antd";
import {dataMock} from "@/app/datamock";
import CardProduct from "../cardProductComponent";

const buttonsCategory = [
  {
    name: "buquês",
    id: 1,
  },
  {
    name: "decoração",
    id: 2,
  },
  {
    name: "flores",
    id: 3,
  },
  {
    name: "acessórios",
    id: 4,
  },
  {
    name: "pelúcias",
    id: 5,
  },
];

export default function CategoryComponent() {
  const [category, setCategory] = useState(buttonsCategory[0]?.id);
  const TabsCategory = () => {
    return (
      <>
        <Row
          style={{
            width: "90%",
            justifyContent: "space-evenly",
            gap: "1rem",
            overflowX: "hidden",
          }}
        >
          {buttonsCategory.map((item, index) => {
            return (
              <Button
                onClick={() => setCategory(item?.id)}
                className={
                  category === item?.id ? "btn-category-active" : "btn-category"
                }
                key={index}
              >
                {item?.name}
              </Button>
            );
          })}
        </Row>

        <Row style={{width: "90%", marginTop: "50px", flexDirection: "column"}}>
          <h3
            style={{
              fontSize: "40px",
              color: "#FF5353",
              textTransform: "capitalize",
            }}
          >
            {buttonsCategory[category - 1]?.name}
          </h3>
          <br />

          <Row
            style={{
              marginLeft: "0px !important",
              width: "100%",
              gap: "10px 20px",
            }}
          >
            <CardProduct
              data={dataMock.filter(i => i.categoryId === category)}
            ></CardProduct>
          </Row>
          <Row
            style={{
              width: "100%",
              justifyContent: "center",
              margin: "50px 0 50px 0",
            }}
          >
            <Button className="btn-view-more">Ver mais +</Button>
          </Row>
        </Row>
      </>
    );
  };

  return (
    <section className="container-category">
      <TitleComponent text="Categorias"></TitleComponent>
      <TabsCategory></TabsCategory>
    </section>
  );
}
