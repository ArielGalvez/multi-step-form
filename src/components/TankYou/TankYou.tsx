import React, { useState } from "react";
import { IconTankYou } from "../Icons/Icons";
import "./styles.css"

const text = `Thanks for confirming your subscription! We hope you have fun using our platform. 
If you have fun using our platform. 
If you event need support, please feel free to email us at support@loremgaming.com.`

const TankYou = () => {
  return (
    <div
      className="tank_you"
    >
      <IconTankYou />
      <h4>Thank you!</h4>
      <p>{text}</p>
    </div>
  );
};

export default TankYou;
