import React from "react";
import "./style.css";
import TitleComponent from "../titleComponent";
import {Button, Row} from "antd";

const buttonsCategory = [
  "flores",
  "presentes",
  "decoração",
  "acessórios",
  "pelúcias",
];

export default function CategoryComponent() {
  const Buttons = () => {
    return (
      <Row style={{width: "90%", justifyContent: "space-evenly", gap: "1rem"}}>
        {buttonsCategory.map((item, index) => {
          return (
            <Button className="btn-category" key={index}>
              {item}
            </Button>
          );
        })}
      </Row>
    );
  };

  return (
    <section className="container-category">
      <TitleComponent text="Categorias"></TitleComponent>

      <Buttons></Buttons>
    </section>
  );
}
