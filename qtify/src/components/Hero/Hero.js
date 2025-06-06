import React from "react";
import styles from "../Hero/Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src="logo192.png"
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;