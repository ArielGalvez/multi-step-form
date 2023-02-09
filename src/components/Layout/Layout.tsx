import React, { FC } from "react";
import StepButton from "../StepButton/StepButton";
import Steps from "../Steps/Steps";
import "./styles.css";

const Layout: FC = () => {
  return (
    <div className="layout">
      <div className="divider">
        <nav className="nav">
          <Steps />
        </nav>
        <section className="content-bg">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            blanditiis nisi modi tenetur doloribus incidunt beatae veritatis
            laboriosam repellendus et expedita ea consectetur quidem, minus
            perspiciatis accusantium quas iure architecto!
          </div>
        </section>
      </div>
      <section className="buttons">buttons</section>
    </div>
  );
};

export default Layout;
