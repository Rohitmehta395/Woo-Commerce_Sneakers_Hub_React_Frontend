import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import "./Nav.css";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        {/* <img
          src="../creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.webp"
          alt="logo"
          className="logo"
        /> */}
        <div className="search-input">
          <input
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
            value={query}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
