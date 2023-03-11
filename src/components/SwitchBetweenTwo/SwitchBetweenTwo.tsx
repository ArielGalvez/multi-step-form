import { FormikProps } from "formik";
import React, { FC } from "react";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import SwitchButton from "../SwitchButton/SwitchButton";
import "./styles.css";

type SwitchBetweenTwoProps = {
  option1: string;
  option2: string;
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const SwitchBetweenTwo: FC<SwitchBetweenTwoProps> = (props) => {
  const { option1, option2, handleChange, values } = props;
  return (
    <div className="switch_between_two">
      <span className={`${!values.isYearly && 'active'}`}>{option1}</span>
      <SwitchButton name="isYearly" handleChange={handleChange} values={values} />
      <span className={`${values.isYearly && 'active'}`}>{option2}</span>
    </div>
  );
};

export default SwitchBetweenTwo;
