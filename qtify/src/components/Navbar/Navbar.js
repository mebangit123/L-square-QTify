import React from "react";
import { Link } from "react-router-dom";
// import Button from "@mui/material";
import Logo from "../Logo/Logo";
// import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import FButton  from "../Button/Button";
import Search from '../Search/Search'
function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>         
        <Logo />
        <Search placeholder='search'/>
        <FButton />        
      </nav>
    </div>    
  );
}

export default Navbar;