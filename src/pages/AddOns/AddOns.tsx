import { FormikProps } from "formik";
import React from "react";
import { AddonsCards } from "../../components/AddonsCards/AddonsCards";
import { Form } from "../../components/Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";

type AddOnsProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const AddOns: React.FC<AddOnsProps> = (props) => {
  const { values, handleChange } = props;

  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsCards handleChange={handleChange} values={values} />
    </Form>
  );
};
