import React, { FC } from "react";
import { IconArcade, IconAdvanced, IconPro } from "../Icons/Icons";
import PlanCard from "../PlanCard/PlanCard";
import "./styles.css";

type PlanCardsProps = {
  isYearly: boolean;
};

const PlanCards: FC<PlanCardsProps> = ({ isYearly }) => {
  return (
    <ul className="plan_cards">
      <PlanCard name="Arcade" description={isYearly ? "$90/yr" : "$9/mo"} isYearly={isYearly} selected>
        <IconArcade />
      </PlanCard>
      <PlanCard name="Advanced" description={isYearly ? "$120/yr" : "$12/mo"} isYearly={isYearly}>
        <IconAdvanced />
      </PlanCard>
      <PlanCard name="Pro" description={isYearly ? "$150/yr" : "$15/mo"} isYearly={isYearly}>
        <IconPro />
      </PlanCard>
    </ul>
  );
};

export default PlanCards;
