import { FormikProps } from "formik";
import React from "react";
import Form from "../Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import TotalDetail from "../TotalDetail/TotalDetail";

type Props = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const FinishUp = (props: Props) => {
  return (
    <Form
      title="Finishing up"
      description="Double-check everthing looks OK before confirming."
    >
      <TotalDetail {...props} />
    </Form>
  );
};

export default FinishUp;
