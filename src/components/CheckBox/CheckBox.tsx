import { FormikProps } from "formik";
import React from "react";
import "./styles.css";

type CheckBoxProps<T extends {}> = {
  handleChange: FormikProps<T>["handleChange"];
  values: T;
  name: keyof T;
};

function CheckBox<T extends {}> (props: CheckBoxProps<T>) {
  const { values, handleChange, name } = props;

  return (
    <label className="checkbox">
      <input type="checkbox" name={name as string} checked={values[name] as boolean} onChange={handleChange} />
      <span className="mark"></span>
    </label>
  );
};

export default CheckBox;
