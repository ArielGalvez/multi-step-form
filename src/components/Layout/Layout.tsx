import React, { FC } from "react";
import AddOns from "../AddOns/AddOns";
import Button from "../Button/Button";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import Steps from "../Steps/Steps";
import "./styles.css";

const Layout: FC = () => {
  return (
    <div className="layout">
      <nav className="nav">
        <Steps />
      </nav>
      <section className="content-bg">
        <div className="content">
          <AddOns />
        </div>
      </section>
      <section className="actions">
        <div className="buttons">
          <Button text="Go Back" type="secondary" />
          <Button text="Next Step" type="primary" />
        </div>
      </section>
    </div>
  );
};

export default Layout;
