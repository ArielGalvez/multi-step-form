import React, { FC, ReactNode } from "react";
import "./styles.css";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset"
  variant: 'primary' | 'secondary';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  const { text, type, variant, onClick } = props;
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
