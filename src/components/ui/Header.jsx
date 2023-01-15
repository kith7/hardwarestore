import React from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Parti_Pirate_Logo_%28FR%29_19.png?20190504095606'
        alt='Arrs logo'
      />

      <nav className={classes.links}>
        <ul className={classes.links}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
