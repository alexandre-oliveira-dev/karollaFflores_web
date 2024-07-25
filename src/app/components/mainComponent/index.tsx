"use client";
import React from "react";
import "./style.css";
import Header from "../header";

interface MainComponentProps {
  children?: React.ReactNode;
}

export default function MainComponent({children}: MainComponentProps) {
  return (
    <main className="main-container">
      <Header></Header>
      <div className="children-container">{children}</div>
    </main>
  );
}
