"use client";
import React, {useContext, useEffect, useState} from "react";
import "./style.css";
import {Button, Image, Input, Row, Skeleton} from "antd";
import logo from "../../assets/logo.png";
import {BiExit, BiSearch} from "react-icons/bi";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";
import {PiShoppingCartLight} from "react-icons/pi";
import Link from "antd/es/typography/Link";
import {dataProviderContext} from "@/context/dataProvider";
import {authProviderContext} from "@/context/authProvider";
import {FiUser} from "react-icons/fi";

export default function Header() {
  const [patch, setPatch] = useState<string | undefined>("");
  const {categorys} = useContext(dataProviderContext);
  const {userEmail} = useContext(authProviderContext);

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
          <Link href="/">
            <Image
              className="logo"
              preview={false}
              src={logo.src}
              alt="logo"
            ></Image>
          </Link>
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
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flex: 1,
          }}
        >
          <Row style={{alignItems: "center", gap: 15}}>
            <Row style={{gap: 10}}>
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
            </Row>
            {userEmail && (
              <div style={{display: "flex", alignItems: "center"}}>
                <FiUser size={20}></FiUser>
                <p>{userEmail}</p>
              </div>
            )}
            <Link
              style={{
                width: "max-content",
                border: 0,
                fontSize: "19px",
                boxShadow: "none",
                backgroundColor: "#FF5353",
                color: "#fff",
                padding: "4px 5px 4px 5px",
                borderRadius: 5,
              }}
            >
              {userEmail ? (
                <>
                  sair <BiExit></BiExit>
                </>
              ) : (
                "Entrar"
              )}
            </Link>
            <Link style={{color: "#ff5353"}}>Criar conta</Link>
          </Row>
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
          {!categorys.length ? (
            <div style={{display: "flex", gap: 10}}>
              {Object.entries([1, 2, 3]).map((_i, index) => (
                <Skeleton.Button
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100px",
                  }}
                  active
                ></Skeleton.Button>
              ))}
            </div>
          ) : (
            <>
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
              {categorys?.slice(0, 5).map(item => {
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
            </>
          )}
        </nav>
      </Row>
    </header>
  );
}
