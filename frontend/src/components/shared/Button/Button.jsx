import React from "react";
import styles from "./Button.module.css";

const Button = ({text}) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src="/images/arrow_forward.png" alt="arrow" />
    </button>
  );
};

export default Button;
