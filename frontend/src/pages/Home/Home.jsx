import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  }

  const startRegister = () => {
    navigate("/authenticate");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coderhouse!" icon="hand">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks :)
        </p>
        <div className="">
          <Button onClick={startRegister}  text="Let's Go" />
        </div>
        <div className={styles.siginWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          {/* <Link to="/login" style={signInLinkStyle}>Sign In</Link> */}
        </div>
      </Card>
    </div>
  );
};

export default Home;
