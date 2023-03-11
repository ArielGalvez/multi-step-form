import { FormikProps } from "formik";
import React from "react";
import Form from "../Form/Form";
import InputText from "../InputText/InputText";

interface PersonalInfoProps {
  handleChange: FormikProps<{
    name: string;
    email: string;
    phone: string;
  }>["handleChange"];
  values: { name: string; email: string; phone: string };
  errors: any;
  touched: any;
}

const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
  const { handleChange, values, errors, touched } = props;
  return (
    <Form
      title="Personal Info"
      description="PLease provide your name, email address, and phone number."
    >
      <InputText
        name="name"
        label="Name"
        placeholder="e.g. Stephen King"
        value={values.name}
        onChange={handleChange}
        errorMessage={errors["name"]}
        touched={touched["name"]}
      />
      <InputText
        name="email"
        label="Email"
        placeholder="e.g. Stephenking@lorem.com"
        value={values.email}
        onChange={handleChange}
        errorMessage={errors["email"]}
        touched={touched["email"]}
      />
      <InputText
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={values.phone}
        onChange={handleChange}
        errorMessage={errors["phone"]}
        touched={touched["phone"]}
      />
    </Form>
  );
};

export default PersonalInfo;
