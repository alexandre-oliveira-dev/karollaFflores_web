"use client";

import MainComponent from "@/app/components/mainComponent";
import React, {useContext} from "react";
import "./style.css";
import {useParams} from "next/navigation";
import TitleComponent from "@/app/components/titleComponent";
import CardProduct from "@/app/components/cardProductComponent";
import {dataMock} from "@/app/datamock";
import {Row} from "antd";
import {dataProviderContext} from "@/app/context/dataProvider";

export default function Categories() {
  const {id} = useParams();
  const {data} = useContext(dataProviderContext);

  const categoryName = data[data?.findIndex(i => i.id === Number(id))]?.name;

  return (
    <>
      <MainComponent>
        <div className="banner3"></div>
        <main className="container-categories-page">
          <TitleComponent text={categoryName}></TitleComponent>
          <Row
            style={{
              padding: "1rem",
              gap: "10px 20px",
              justifyContent: "center",
            }}
          >
            <CardProduct
              data={dataMock.filter(i => i.categoryId === Number(id))}
            ></CardProduct>
          </Row>
        </main>
      </MainComponent>
    </>
  );
}
