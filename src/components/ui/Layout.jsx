import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
