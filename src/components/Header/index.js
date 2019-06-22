import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" activeClassName="hurray">
          Main page
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" activeClassName="hurray">
          Posts page
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
