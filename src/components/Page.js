import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.pagetitle} | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);
  return <>{props.children}</>;
};

export default Page;
