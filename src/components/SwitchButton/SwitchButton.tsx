import { FormikProps } from "formik";
import React from "react";
import { DataForm } from "../../pages/MultiStepForm/MultiStep.container";
import "./styles.css";

type SwitchButtonProps = {
  name: string;
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const SwitchButton: React.FC<SwitchButtonProps> = (props) => {
  const { name, handleChange, values } = props;
  return (
    <label className="switch_button">
      <input
        type="checkbox"
        name={name}
        checked={values.isYearly}
        onChange={handleChange}
      />
      <span className="slider"></span>
    </label>
  );
};
