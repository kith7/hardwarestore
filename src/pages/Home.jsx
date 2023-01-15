import React, { useState } from "react";
import { MockData } from "../MockData";
import Product from "../components/Product";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <h2 style={{ color: "#924f85" }}>Welcome to Arr&arr Pirate items shop</h2>
      <div className={classes.card__wrapper}>
        {MockData.map((prod) => {
          return <Product {...prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
