import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>CryptoVerse</h1>
        <FaEthereum color='orange' size={"35"} />
      </div>
      <ul>
        <li>
          <Link path to="/">
            Home
          </Link>
        </li>
        <li>
          <Link path to="/coins">
            Coins
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header
