"use client";
import React, {useEffect, useState} from "react";
import "./style.css";
import {Image, Input, Row} from "antd";
import logo from "../../assets/logo.png";
import {BiSearch} from "react-icons/bi";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";
import {PiShoppingCartLight} from "react-icons/pi";
import Link from "antd/es/typography/Link";
import {buttonsCategory} from "../categoryComponent";

export default function Header() {
  const [patch, setPatch] = useState<string | undefined>("");

  useEffect(() => {
    const urlPatch = () => {
      if (typeof window !== "undefined") {
        return window.location.pathname;
      }
    };
    setPatch(urlPatch());
  }, []);

  return (
    <header className="header-container">
      <Row className="row-input">
        <div style={{flex: 1, display: "flex", justifyContent: "center"}}>
          <Image
            className="logo"
            preview={false}
            src={logo.src}
            alt="logo"
          ></Image>
        </div>
        <div style={{flex: 1, display: "flex", justifyContent: "center"}}>
          <Input
            style={{
              height: 40,
              borderColor: "#121212",
            }}
            prefix={<BiSearch size={20} color="silver"></BiSearch>}
            placeholder="O que você precisa hoje ?"
          ></Input>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link
            target="_blank"
            href="https://www.instagram.com/karolla_flores/"
          >
            <FaInstagram color="#FF5353" size={30} />
          </Link>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511953513154&text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es!%0A"
          >
            <FaWhatsapp color="#FF5353" size={30} />
          </Link>
          <PiShoppingCartLight color="#121212" size={30} />
        </div>
      </Row>
      <Row style={{width: "100%"}}>
        <nav
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "0px",
          }}
        >
          <Link
            className="navLink"
            style={{
              fontSize: "18px",
              textTransform: "capitalize",
              color: "#121212",
            }}
            href={`/`}
          >
            início
          </Link>
          {buttonsCategory.slice(0, 5).map(item => {
            return (
              <Link
                className="navLink"
                style={{
                  fontSize: "18px",
                  textTransform: "capitalize",
                  color: patch?.includes(String(item?.id))
                    ? "#FF5353"
                    : "#121212",
                }}
                href={`/categorias/${item?.id}`}
                key={item?.id}
              >
                {item?.name}
              </Link>
            );
          })}
        </nav>
      </Row>
    </header>
  );
}
