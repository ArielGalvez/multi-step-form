import React, { FC, ReactNode } from "react";
import "./styles.css";

type PlanCardProps = {
  children: ReactNode;
  name: string;
  description: string;
  isYearly: boolean;
  selected?: boolean;
};

const PlanCard: FC<PlanCardProps> = (props) => {
  const { children, name, description, isYearly, selected = false } = props;
  return (
    <li className={`plan_card ${selected && 'selected'}`}>
      {children}
      <div className="plan_card__content">
        <h4>{name}</h4>
        <span>{description}</span>
        {isYearly && <p>2 months free</p>}
      </div>
    </li>
  );
};

export default PlanCard;
