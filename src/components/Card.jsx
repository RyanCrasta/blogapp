import React from "react";
import styles from "../styles/Card.module.css";

export const Card = ({ cardInfo }) => {
  return (
    <div className={styles["cardCtn"]}>
      <div className={styles["cardLeft"]}>
        <div>{cardInfo.tag}</div>
        <h3>{cardInfo.title}</h3>
        <p>{cardInfo.date}</p>
        <div>{cardInfo.description}</div>
      </div>
      <div className={styles["cardRight"]}>
        <img src={cardInfo.image} />
      </div>
    </div>
  );
};
