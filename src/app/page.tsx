"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./page.css";
import MainComponent from "./components/mainComponent";
import logo from "./assets/logo-white.png";
import logo2 from "./assets/logo2.png";
import {Row} from "antd";
import deliveryIcon from "./assets/icons/Delivery.png";
import discontIcon from "./assets/icons/Discount.png";
import whatsIcon from "./assets/icons/WhatsApp.png";
import Title from "antd/es/typography/Title";
import NewsListerComponent from "./components/newsListerComponent";
import CategoryComponent from "./components/categoryComponent";

export default function Home() {
  return (
    <>
      <MainComponent>
        <main className="main-content">
          <div className="banner">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10rem",
              }}
            >
              <img src={logo2.src} alt="logo" />
              <img width={"350px"} src={logo.src} alt="logo" />
              <br />
              <br />
              <h1 style={{color: "#fff", fontSize: "25px", fontWeight: "400"}}>
                Flores | arranjos | buquês | presentes
              </h1>
            </div>
          </div>
          <Row
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "83px",
              backgroundColor: "#fff",
            }}
          >
            <Row style={{alignItems: "center", gap: 20}}>
              <div>
                <img
                  height={50}
                  width={50}
                  src={deliveryIcon?.src}
                  alt="deliveryicon"
                />
              </div>
              <Title style={{color: "#FF5353"}} level={3}>
                Entrega rápida
              </Title>
            </Row>
            <Row style={{alignItems: "center", gap: 20}}>
              <div>
                <img
                  height={50}
                  width={50}
                  src={whatsIcon?.src}
                  alt="deliveryicon"
                />
              </div>
              <Title style={{color: "#FF5353"}} level={3}>
                Compre pelo whatsapp
              </Title>
            </Row>
            <Row style={{alignItems: "center", gap: 20}}>
              <div>
                <img
                  height={50}
                  width={50}
                  src={discontIcon?.src}
                  alt="deliveryicon"
                />
              </div>
              <Title style={{color: "#FF5353"}} level={3}>
                Descontos de até 10%
              </Title>
            </Row>
          </Row>
          <NewsListerComponent></NewsListerComponent>
          <CategoryComponent></CategoryComponent>
          <div className="banner2" style={{width: "100%"}}></div>
        </main>
      </MainComponent>
    </>
  );
}
