import React from "react";
import Form from "../Form/Form";
import InputText from "../InputText/InputText";

type Props = {};

const PersonalInfo = (props: Props) => {
  return (
    <Form
      title="Personal Info"
      description="PLease provide your name, email address, and phone number"
    >
      <InputText name="name" label="Name" placeholder="e.g. Stephen King" />
      <InputText
        name="email"
        label="Email"
        placeholder="e.g. Stephenking@lorem.com"
      />
      <InputText
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
    </Form>
  );
};

export default PersonalInfo;
