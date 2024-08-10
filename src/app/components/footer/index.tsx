/* eslint-disable @next/next/no-img-element */
"use client";

import {Col, Row, Typography} from "antd";
import Link from "antd/es/typography/Link";
import React, {useContext} from "react";
import "./style.css";
import {dataProviderContext} from "@/app/context/dataProvider";

export default function Footer() {
  const {categorys} = useContext(dataProviderContext);
  return (
    <footer className="footer-component">
      <Row
        style={{width: "100%", justifyContent: "space-evenly", height: "auto"}}
      >
        <Col className="col-footer">
          <h3>Institucional</h3>
          <br />
          <Link>Sobre nós</Link>
        </Col>
        <Col className="col-footer">
          <h3>O que procura hoje?</h3>
          <br />
          {categorys.map((item, index) => {
            return (
              <Link href={`/categorias/${item?.id}`} key={index}>
                {item.name}
              </Link>
            );
          })}
        </Col>
        <Col className="col-footer">
          <h3>Formas de pagamento</h3>
          <br />
          <Row style={{width: "100%", justifyContent: "center"}}>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/pix.png"
              alt="pix"
            />
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/mastercard.png"
              alt="mastercard"
            />
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/visa.png"
              alt="visa"
            />
          </Row>
        </Col>
        <Col className="col-footer">
          <h3>Nossa localização</h3>
          <br />
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.835981482109!2d-46.596492023961815!3d-23.538400960750504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59faf6247fb7%3A0xd43565549ad97cd0!2sR.%20Visc.%20de%20Parna%C3%ADba%2C%203501%20-%20Bel%C3%A9m%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003045-002!5e0!3m2!1spt-BR!2sbr!4v1723122695130!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              style={{border: 0, margin: 0}}
              loading="lazy"
            ></iframe>
            <div>
              <Typography.Text copyable>
                R. Visc. de Parnaíba, 3501 - Belém{" "}
              </Typography.Text>
            </div>
          </Col>
        </Col>
      </Row>
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        {" "}
        <Typography.Text>
          Todos direitos reservados à karolla flores ltda -{" "}
          {new Date().getFullYear()}
        </Typography.Text>
      </div>
    </footer>
  );
}
