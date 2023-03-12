import { FormikProps } from "formik";
import React from "react";
import { Form } from "../../components/Form/Form";
import { InputText } from "../../components/InputText/InputText";
import { DataForm } from "../MultiStepForm/MultiStep.container";

interface PersonalInfoProps {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
  errors: FormikProps<DataForm>["errors"];
  touched: FormikProps<DataForm>["touched"];
}

export const PersonalInfo: React.FC<PersonalInfoProps> = (props) => {
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
        errorMessage={errors["name"] || ""}
        touched={touched["name"] || false}
      />
      <InputText
        name="email"
        label="Email"
        placeholder="e.g. Stephenking@lorem.com"
        value={values.email}
        onChange={handleChange}
        errorMessage={errors["email"] || ""}
        touched={touched["email"] || false}
      />
      <InputText
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={values.phone}
        onChange={handleChange}
        errorMessage={errors["phone"] || ""}
        touched={touched["phone"] || false}
      />
    </Form>
  );
};
