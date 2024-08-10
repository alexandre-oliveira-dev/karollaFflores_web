/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import MainComponent from "@/app/components/mainComponent";
import React, {useEffect, useState} from "react";
import "./style.css";
import {Button, Card, Col, Image, Row} from "antd";
import {getProduct} from "@/service/api";
import {useParams} from "next/navigation";
import {Products} from "@/types";
import {formatter} from "@/common/priceFormatter";

export default function ProductPage() {
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Products>();
  useEffect(() => {
    async function get() {
      setProduct(await getProduct({id: Number(id)}));
    }
    get();
  }, [id]);

  return (
    <>
      <MainComponent>
        <main className="container-product-page">
          <Row className="product-box">
            <div style={{flex: 1}} className="box-img-product">
              <Card className="card-img-product">
                <Image
                  src={`data:image/*;base64,${product?.imgUrl}`}
                  alt={product?.title}
                  className="imgProduct"
                ></Image>
              </Card>
            </div>
            <div style={{flex: 1}} className="box-img-product">
              <div style={{display: "flex", flexDirection: "column", gap: 50}}>
                <h2
                  style={{
                    fontSize: "2em",
                    textTransform: "capitalize",
                    fontWeight: 400,
                  }}
                >
                  {product?.title}
                </h2>
                <Col>
                  <h2 style={{fontSize: "35px", color: "#0C9A00"}}>
                    {formatter(product?.price)}
                  </h2>
                  {/* <p>vezes</p> */}
                </Col>
                <Button
                  style={{
                    backgroundColor: "#FF5353",
                    height: 50,
                    color: "#fff",
                    cursor:'pointer'
                  }}
                >
                  Adicionar no carrinho
                </Button>
              </div>
            </div>
          </Row>
        </main>
      </MainComponent>
    </>
  );
}
