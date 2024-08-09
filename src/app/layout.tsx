import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import logo from "./assets/logo2.png";
import DataProvider from "./context/dataProvider";
import AuthProvider from "./context/authProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Karolla Flores",
  description: "O seu presente ideal você encontra aqui!",
  icons: {shortcut: {url: logo.src}},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AuthProvider>
        <DataProvider>
          <body className={inter.className}>{children}</body>
        </DataProvider>
      </AuthProvider>
    </html>
  );
}
