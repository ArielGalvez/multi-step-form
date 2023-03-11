import { Form as FormFormik } from "formik";
import React, { FC } from "react";
import AddOns from "../AddOns/AddOns";
import Button from "../Button/Button";
import FinishUp from "../FinishUp/FinishUp";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import Steps from "../Steps/Steps";
import TankYou from "../TankYou/TankYou";
import "./styles.css";

export interface MultiStepFormProps {
  children: React.ReactNode;
  prevStep: () => void;
  nextStep: () => void;
}

export const MultiStepForm: FC<MultiStepFormProps> = (props) => {
  const { children, prevStep } = props;
  return (
    <FormFormik className="multi-step-form">
      <nav className="nav">
        <Steps />
      </nav>
      <section className="content-bg">
        <div className="content">
          {children}
        </div>
      </section>
      <section className="actions">
        <div className="buttons">
          <Button text="Go Back" variant="secondary" type="button" onClick={prevStep} />
          <Button text="Next Step" variant="primary" type="submit" />
        </div>
      </section>
    </FormFormik>
  );
};
