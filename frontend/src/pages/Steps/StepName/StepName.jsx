import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import { setName } from "../../../store/activateSlice";
import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullname] = useState(name);

  const nextStep = () => {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  };
  return (
    <>
      <Card title="What’s your full name?" icon="smile">
        <TextInput
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <div className="">
          <p className={styles.paragraph}>
            People use real names at codershouse :)
          </p>
          <div className={styles.actionButtonWrap}>
            <Button onClick={nextStep} text="Next" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default StepName;
