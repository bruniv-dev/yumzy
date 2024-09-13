import React, { useContext, useState } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";

const Header = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`navbar-menu-item ${menu === "home" ? "active" : ""}`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            navigate("/#explore-menu");
          }}
          className={`navbar-menu-item ${menu === "menu" ? "active" : ""}`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("app");
            navigate("/#app-download");
          }}
          className={`navbar-menu-item ${menu === "app" ? "active" : ""}`}
        >
          app
        </a>
        <a
          href="#footer"
          onClick={() => {
            setMenu("contact-us");
            navigate("/#footer");
          }}
          className={`navbar-menu-item ${
            menu === "contact-us" ? "active" : ""
          }`}
        >
          contact
        </a>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        {/* <HiOutlineSearch className="navbar-search-icon" /> */}
        <div className="navbar-bag-icon">
          <Link to="/cart">
            {/* <img src={assets.basket_icon} alt="" /> */}
            <HiOutlineShoppingCart />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Log In</button>
      </div>
    </div>
  );
};

export default Header;
