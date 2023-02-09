import React, { FC, ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary';
};

const Button: FC<ButtonProps> = (props) => {
  const { text, type } = props;
  return (
    <button className={`button ${type}`}>
      {text}
    </button>
  );
};

export default Button;
