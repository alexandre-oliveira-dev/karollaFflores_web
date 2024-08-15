/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import MainComponent from "@/app/components/mainComponent";
import React, {useEffect, useState} from "react";
import "./style.css";
import {Button, Card, Col, Image, Row, Skeleton} from "antd";
import {getProduct} from "@/service/api";
import {useParams} from "next/navigation";
import {Products} from "@/types";
import {formatter} from "@/common/priceFormatter";
import RelatedProductsComponent from "@/app/components/relatedProductsComponent";

export default function ProductPage() {
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Products>();
  const [imgBase64, setImgBase64] = useState("");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function get() {
      setLoad(true);
      try {
        setProduct(await getProduct({id: Number(id)}));
        setLoad(false);
      } catch {
        setLoad(false);
      }
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
                <div>
                  {load ? (
                    <Skeleton.Image
                      active
                      style={{width: "470px", height: "300px"}}
                    ></Skeleton.Image>
                  ) : (
                    <Image
                      src={`data:image/*;base64,${
                        imgBase64 ? imgBase64 : product?.Photos[0]?.imgBase64
                      }`}
                      alt={product?.title}
                      className="imgProduct"
                    ></Image>
                  )}
                </div>
                <br />
                <Row style={{gap: 10}}>
                  {product?.Photos?.map((photo, index) => {
                    if (load)
                      return (
                        <Skeleton.Image
                          key={index}
                          active
                          style={{width: "150px", height: "150px"}}
                        ></Skeleton.Image>
                      );
                    return (
                      <Image
                        className="img-product-mini"
                        preview={false}
                        onClick={() => setImgBase64(photo?.imgBase64)}
                        key={index}
                        src={`data:image/*;base64,${photo?.imgBase64}`}
                        alt={String(photo?.prodId)}
                      ></Image>
                    );
                  })}
                </Row>
              </Card>
            </div>
            <div style={{flex: 1}} className="box-img-product">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 50,
                  width: "100%",
                  alignItems: "flex-start",
                }}
              >
                <h2
                  style={{
                    fontSize: "2em",
                    textTransform: "capitalize",
                    fontWeight: 400,
                  }}
                >
                  {product?.title}
                </h2>
                <p>{product?.description}</p>
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
                    cursor: "pointer",
                  }}
                >
                  Adicionar no carrinho
                </Button>
              </div>
            </div>
          </Row>
          {product && (
            <RelatedProductsComponent
              categoryId={product?.categoryId}
            ></RelatedProductsComponent>
          )}
        </main>
      </MainComponent>
    </>
  );
}
