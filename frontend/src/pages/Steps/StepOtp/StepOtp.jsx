import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Button/Button";
import styles from "./StepOtp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../../http";
import { setAuth } from "../../../store/authSlice";

const StepOtp = () => {
  const dispatch = useDispatch();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const [otp, setOtp] = useState("");

  const submit = async () => {
    if (!otp || !phone || !hash) {
      return;
    }
    try {
      const { data } = await verifyOtp({ otp, phone, hash });
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className="">
            <div className={styles.actionButtonWrap}>
              <Button onClick={submit} text="Next" />
            </div>
            <p className={styles.bottomParagraph}>
              By entering your email, you’re agreeing to our Terms of Service
              and Privacy Policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
