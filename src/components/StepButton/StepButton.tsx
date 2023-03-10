import React, { FC } from "react";
import "./styles.css";

type StepButtonProps = {
  number: number;
  title: string;
  active?: boolean;
  onClick: () => void;
};

export const StepButton: FC<StepButtonProps> = (props) => {
  const { number, title, active = false, onClick } = props;
  return (
    <li className="step_button">
      <button
        className={`step_button__button ${active && "active"}`}
        type="button"
        onClick={onClick}
      >
        <p className="step_button__number">{number}</p>
        <p className="step_button__content">
          <span>{`STEP ${number}`}</span>
          <h4>{title}</h4>
        </p>
      </button>
    </li>
  );
};
