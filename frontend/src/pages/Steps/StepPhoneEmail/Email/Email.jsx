import React from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";

const Email = () => {
  return (
    <Card title="Enter your email id" icon="email_emoji">
      <div className="">
        <Button text="Next" />
      </div>
    </Card>
  );
};

export default Email;
