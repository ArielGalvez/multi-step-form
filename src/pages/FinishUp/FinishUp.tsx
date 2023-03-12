import { FormikProps } from "formik";
import React from "react";
import { Form } from "../../components/Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import { TotalDetail } from "../../components/TotalDetail/TotalDetail";

type FinishUpProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const FinishUp: React.FC<FinishUpProps> = (props) => {
  return (
    <Form
      title="Finishing up"
      description="Double-check everthing looks OK before confirming."
    >
      <TotalDetail {...props} />
    </Form>
  );
};
