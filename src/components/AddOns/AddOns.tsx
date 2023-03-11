import { FormikProps } from "formik";
import React, { useState } from "react";
import AddonsCards from "../AddonsCards/AddonsCards";
import Form from "../Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";

type Props = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const AddOns = (props: Props) => {
  const {values, handleChange} = props

  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsCards handleChange={handleChange} values={values} />
    </Form>
  );
};

export default AddOns;
