/* eslint-disable @next/next/no-img-element */
"use-client";
import React from "react";
import "./page.css";
import MainComponent from "./components/mainComponent";
import logo from "./assets/logo-white.png";
import logo2 from "./assets/logo2.png";

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
        </main>
      </MainComponent>
    </>
  );
}
