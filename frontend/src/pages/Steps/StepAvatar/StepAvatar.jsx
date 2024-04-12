import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import styles from "./StepAvatar.module.css";
import { activate } from "../../../http";
import { setAuth } from "../../../store/authSlice";

const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/avatar.png");

  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  const submit = async () => {
    try {
      const { data } = await activate({ name, avatar });
      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Card title={`Okay, ${name}`} icon="monkey">
        <p className={styles.subHeading}>how's this photo?</p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="avatar" />
        </div>
        <div className="">
          <input
            onChange={captureImage}
            id="avatarInput"
            type="file"
            className={styles.avatarInput}
          />
          <label className={styles.avatarLabel} htmlFor="avatarInput">
            Choose a different photo
          </label>
        </div>
        <div className="">
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default StepAvatar;
