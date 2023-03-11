import { FormikProps } from "formik";
import React, { FC, ReactNode } from "react";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import "./styles.css";

type PlanCardProps = {
  children: ReactNode;
  name: string;
  description: string;
  isYearly: boolean;
  value: string;
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const PlanCard: FC<PlanCardProps> = (props) => {
  const { children, name, description, isYearly, handleChange, values, value } =
    props;
  return (
    <li>
      <label className={`plan_card ${values.plan === value && "selected"}`}>
        <input
          type="radio"
          name={name}
          value={value}
          checked={values.plan === value}
          onChange={handleChange}
          hidden={true}
        />
        {children}
        <div className="plan_card__content">
          <h4>{value}</h4>
          <span>{description}</span>
          {isYearly && <p>2 months free</p>}
        </div>
      </label>
    </li>
  );
};

export default PlanCard;
