import React, { useState } from "react";
import Form from "../Form/Form";
import PlanCards from "../PlanCards/PlanCards";
import SwitchBetweenTwo from "../SwitchBetweenTwo/SwitchBetweenTwo";

type Props = {};

const SelectPlan = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);

  const setYearly = (active: boolean) => {
    setIsYearly(active)
  }

  return (
    <Form
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <PlanCards isYearly={isYearly} />
      <SwitchBetweenTwo option1="Montly" option2="Yearly" active={isYearly} onChange={setYearly} />
    </Form>
  );
};

export default SelectPlan;
