import React, { FC } from "react";
import "./styles.css";

type StepButtonProps = {
  number: number;
  title: string;
  active?: boolean;
  completed?: boolean;
  onClick: () => void;
};

const StepButton: FC<StepButtonProps> = (props) => {
  const { number, title, active = false, completed, onClick } = props;
  return (
    <li className="step_button">
      <button className={`step_button__button ${active && "active"}`} type="button" onClick={onClick}>
        <div className="step_button__number">{number}</div>
        <div className="step_button__content">
          <span>{`STEP ${number}`}</span>
          <h4>{title}</h4>
        </div>
      </button>
    </li>
  );
};

export default StepButton;
