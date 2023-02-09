import React, { FC, ReactNode } from "react";
import "./styles.css";

type InputTextProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

const InputText: FC<InputTextProps> = (props) => {
  const { name, label, placeholder } = props;
  return (
    <div className="input_text">
      <label htmlFor={name}>{label}</label>
      <input name={name} type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputText;
