"use client";

import React, {useContext, useState} from "react";
import "./style.css";
import TitleComponent from "../titleComponent";
import {Button, Row} from "antd";
import CardProduct from "../cardProductComponent";
import Link from "antd/es/typography/Link";
import {dataProviderContext} from "@/context/dataProvider";

export default function CategoryComponent() {
  const {products, categorys} = useContext(dataProviderContext);
  const [category, setCategory] = useState(categorys[0]?.id);
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
          {categorys.map((item, index) => {
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
            {categorys[category - 1]?.name}
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
              data={products.filter(i => i.categoryId === category)}
            ></CardProduct>
          </Row>
          <Row
            style={{
              width: "100%",
              justifyContent: "center",
              margin: "50px 0 50px 0",
            }}
          >
            <Link href={`/categorias/${category}`} className="btn-view-more">
              Ver mais +
            </Link>
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
