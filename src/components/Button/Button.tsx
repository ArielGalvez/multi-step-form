import React from "react";
import "./styles.css";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  variant: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { text, type, variant, onClick } = props;
  return (
    <button className={`button ${variant}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
