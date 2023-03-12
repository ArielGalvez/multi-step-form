import { FormikProps } from "formik";
import React from "react";
import { Form } from "../../components/Form/Form";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import { PlanCards } from "../../components/PlanCards/PlanCards";
import { SwitchBetweenTwo } from "../../components/SwitchBetweenTwo/SwitchBetweenTwo";

type SelectPlanProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const SelectPlan: React.FC<SelectPlanProps> = (props) => {
  const { handleChange, values } = props;

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanCards handleChange={handleChange} values={values} />
      <SwitchBetweenTwo
        option1="Montly"
        option2="Yearly"
        values={values}
        handleChange={handleChange}
      />
    </Form>
  );
};
