import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function MainPageLayout({
  children,
  isHome,
}: {
  children: any;
  isHome: boolean;
}) {
  return (
    <>
      <Navbar isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
