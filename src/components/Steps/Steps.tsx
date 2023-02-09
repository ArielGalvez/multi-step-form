import React, { FC } from "react";
import StepButton from "../StepButton/StepButton";
import "./styles.css";

const Steps: FC = () => {
  const buttons = [
    {
      number: 1,
      title: 'Your info',
      active: true,
    },
    {
      number: 2,
      title: 'Select plan',
      active: false,
    },
    {
      number: 3,
      title: 'Add-ons',
      active: false,
    },
    {
      number: 4,
      title: 'Summary',
      active: false,
    },
  ]
  return (
    <ul className="steps">
      {
        buttons.map(({ number, title, active }) => (
          <StepButton key={number} title={title} number={number} active={active} completed />
        ))
      }
    </ul>
  );
};

export default Steps;
