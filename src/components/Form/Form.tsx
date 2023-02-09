import React, { FC, ReactNode } from "react";
import "./styles.css";

type FormProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Form: FC<FormProps> = (props) => {
  const { title, description, children } = props;
  return (
    <form className="form">
      {title && <h1 className="form__title">{title}</h1>}
      {description && <p className="form__description">{description}</p>}
      {children}
    </form>
  );
};

export default Form;
