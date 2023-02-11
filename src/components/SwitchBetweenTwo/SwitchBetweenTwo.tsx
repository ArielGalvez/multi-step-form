import React, { FC } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import "./styles.css";

type SwitchBetweenTwoProps = {
  option1: string;
  option2: string;
  active?: boolean;
  onChange?: (active: boolean) => void;
};

const SwitchBetweenTwo: FC<SwitchBetweenTwoProps> = (props) => {
  const { option1, option2, active, onChange } = props;
  return (
    <div className="switch_between_two">
      <span className={`${!active && 'active'}`}>{option1}</span>
      <SwitchButton active={active} onChange={onChange} />
      <span className={`${active && 'active'}`}>{option2}</span>
    </div>
  );
};

export default SwitchBetweenTwo;
