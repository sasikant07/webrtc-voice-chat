import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { logout } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
  };

  const logotext = {
    marginLeft: "10px",
  };

  const logoutUser = async () => {
    try {
      const { data } = await logout();
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link to="/" style={brandStyle}>
        <img src="/images/Logo.png" alt="logo" />
        <span style={logotext}></span>
      </Link>
      {isAuth && (
        <div className={styles.navRight}>
          <h3>{user?.name}</h3>
          <Link to="/">
            <img
              className={styles.avatar}
              src={user.avatar ? user?.avatar : "/images/avatar.png"}
              width="40"
              height="40"
              alt="avatar"
            />
          </Link>
          {isAuth && (
            <button className={styles.logoutButton} onClick={logoutUser}>
              <img
                className={styles.logout}
                src="/images/logout.png"
                alt="logout"
              />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
