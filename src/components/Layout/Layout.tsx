import React, { FC } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Steps from "../Steps/Steps";
import "./styles.css";

const Layout: FC = () => {
  return (
    <div className="layout">
      <div className="container">
        <nav className="nav">
          <Steps />
        </nav>
        <section className="content-bg">
          <div className="content">
            <PersonalInfo />
          </div>
        </section>
      </div>
      <section className="buttons">buttons</section>
    </div>
  );
};

export default Layout;
