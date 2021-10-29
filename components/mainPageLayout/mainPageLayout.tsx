import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function MainPageLayout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>;
      <Footer />
    </>
  );
}
