import { FormikProps } from "formik";
import React from "react";
import Form from "../Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import PlanCards from "../PlanCards/PlanCards";
import SwitchBetweenTwo from "../SwitchBetweenTwo/SwitchBetweenTwo";

type Props = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const SelectPlan = (props: Props) => {
  const { handleChange, values } = props;

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanCards
        handleChange={handleChange}
        values={values}
      />
      <SwitchBetweenTwo
        option1="Montly"
        option2="Yearly"
        values={values}
        handleChange={handleChange}
      />
    </Form>
  );
};

export default SelectPlan;
