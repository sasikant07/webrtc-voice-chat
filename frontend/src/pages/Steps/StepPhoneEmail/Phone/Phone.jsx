import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import { sendOtp } from "../../../../http/index";
import styles from "../StepPhoneEmail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

const Phone = ({ onNext }) => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.auth);
  const [phoneNumber, setPhoneNumber] = useState("");

  const submit = async () => {
    const { data } = await sendOtp({ phone: phoneNumber });
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  };

  return (
    <Card title="Enter your phone number" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="">
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="Next" />
        </div>
        <p className={styles.bottomParagraph}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Phone;
