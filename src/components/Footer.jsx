import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footerCtn"]}>
      <div>
        Blog site made by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/ryan-crasta/">
          Ryan Crasta
        </a>
      </div>
    </div>
  );
};

export default Footer;
