import { FormikProps } from "formik";
import React, { FC } from "react";
import { IconArcade, IconAdvanced, IconPro } from "../Icons/Icons";
import {
  DataForm,
  formatPrice,
  prices,
} from "../../pages/MultiStepForm/MultiStep.container";
import { PlanCard } from "../PlanCard/PlanCard";
import "./styles.css";

type PlanCardsProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const PlanCards: FC<PlanCardsProps> = ({ handleChange, values }) => {
  const plans = [
    {
      value: "Arcade",
      description: formatPrice(
        values.isYearly,
        prices.plan["Arcade"](values.isYearly)
      ),
      icon: <IconArcade />,
    },
    {
      value: "Advanced",
      description: formatPrice(
        values.isYearly,
        prices.plan["Advanced"](values.isYearly)
      ),
      icon: <IconAdvanced />,
    },
    {
      value: "Pro",
      description: formatPrice(
        values.isYearly,
        prices.plan["Pro"](values.isYearly)
      ),
      icon: <IconPro />,
    },
  ];
  return (
    <ul className="plan_cards">
      {plans.map((plan) => (
        <PlanCard
          key={plan.value}
          name="plan"
          description={plan.description}
          isYearly={values.isYearly}
          handleChange={handleChange}
          values={values}
          value={plan.value}
        >
          {plan.icon}
        </PlanCard>
      ))}
    </ul>
  );
};
