"use client";
import {getCategorys, getToken, tokenVerify} from "@/service/api";
import {Categorys} from "@/types";
import {LocaleProviderProps} from "antd/es/locale";
import React, {createContext, useEffect, useState} from "react";

interface Props {
  userEmail: String;
  setUserEmail?: React.Dispatch<React.SetStateAction<String>>;
}

type LocalStorageProps = {
  token: string;
  email: String;
};

export const authProviderContext = createContext({} as Props);

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const [userEmail, setUserEmail] = useState<LocalStorageProps["email"]>("");

  useEffect(() => {
    async function get() {
      /*  const {token, userMail} = await getToken();
      console.log("🚀 ~ useEffect ~ data:", token);
      const localstorageData = JSON.stringify({
        token: token,
        email: userMail,
      });
      localStorage.setItem("authToken", localstorageData); */

      if (localStorage.getItem("authToken")) {
        const t: LocalStorageProps = JSON.parse(
          localStorage?.getItem("authToken") as string
        );
        setUserEmail(t?.email);
        const {tokenIsValid} = await tokenVerify({token: t?.token});
        //setIsValidToken(tokenIsValid);

          if (!tokenIsValid) {
            localStorage.removeItem("authToken");
          // logout function here
        }
      }
    }
    get();
  }, []);

  return (
    <authProviderContext.Provider value={{userEmail}}>
      {children}
    </authProviderContext.Provider>
  );
}
