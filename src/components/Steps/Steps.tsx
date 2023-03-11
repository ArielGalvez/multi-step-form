import { FormikProps } from "formik";
import React, { FC } from "react";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import StepButton from "../StepButton/StepButton";
import "./styles.css";

interface StepsProps {
  step: number;
  goToStep: (data: { stepToGo: number; formik: FormikProps<DataForm> }) => void;
  formik: FormikProps<DataForm>;
}

const Steps: FC<StepsProps> = ({ step, goToStep, formik }) => {
  const buttons = [
    {
      number: 1,
      title: "Your info",
    },
    {
      number: 2,
      title: "Select plan",
    },
    {
      number: 3,
      title: "Add-ons",
    },
    {
      number: 4,
      title: "Summary",
    },
  ];
  return (
    <ul className="steps">
      {buttons.map(({ number, title }) => (
        <StepButton
          key={number}
          title={title}
          number={number}
          active={step === number}
          completed
          onClick={() => {
            goToStep({ stepToGo: number, formik });
          }}
        />
      ))}
    </ul>
  );
};

export default Steps;
