import React, { FC } from "react";
import "./styles.css";

type InputTextProps = {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage: string;
  touched: boolean;
};

export const InputText: FC<InputTextProps> = (props) => {
  const { name, label, placeholder, value, onChange, errorMessage, touched } =
    props;
  const hasError = errorMessage && touched;
  return (
    <div className={`input_text ${hasError && "error"}`}>
      <div className="labels">
        <label htmlFor={name}>{label}</label>
        {hasError && <span className="error_text">{errorMessage}</span>}
      </div>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
