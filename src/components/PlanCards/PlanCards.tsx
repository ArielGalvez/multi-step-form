import { FormikProps } from "formik";
import React, { FC } from "react";
import { IconArcade, IconAdvanced, IconPro } from "../Icons/Icons";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import PlanCard from "../PlanCard/PlanCard";
import "./styles.css";

type PlanCardsProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const PlanCards: FC<PlanCardsProps> = ({ handleChange, values }) => {
  return (
    <ul className="plan_cards">
      <PlanCard
        name="plan"
        description={values.isYearly? "$90/yr" : "$9/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
        value="Arcade"
      >
        <IconArcade />
      </PlanCard>
      <PlanCard
        name="plan"
        description={values.isYearly ? "$120/yr" : "$12/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
        value="Advanced"
      >
        <IconAdvanced />
      </PlanCard>
      <PlanCard
        name="plan"
        description={values.isYearly ? "$150/yr" : "$15/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
        value="Pro"
      >
        <IconPro />
      </PlanCard>
    </ul>
  );
};

export default PlanCards;
