import { FormikProps } from "formik";
import React, { ReactNode } from "react";
import "./styles.css";

type PlanCardProps<T extends {}> = {
  children: ReactNode;
  name: keyof T;
  description: string;
  isYearly: boolean;
  value: string;
  handleChange: FormikProps<T>["handleChange"];
  values: T;
};

export function PlanCard<T extends {}>(props: PlanCardProps<T>) {
  const { children, name, description, isYearly, handleChange, values, value } =
    props;
  return (
    <li>
      <label className={`plan_card ${values[name] === value && "selected"}`}>
        <input
          type="radio"
          name={name as string}
          value={value}
          checked={values[name] === value}
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
}
