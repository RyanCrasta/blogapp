import React, { useEffect } from "react";
import styles from "../styles/NotFound.module.css";
import { useNavigate } from "react-router-dom";

export const NotFound = ({ title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className={styles["notfoundctn"]}>
      <img src="/pagenotfound.svg" />

      <button
        onClick={() => {
          navigate("/create-post");
        }}
      >
        Create Blog
      </button>
    </div>
  );
};
