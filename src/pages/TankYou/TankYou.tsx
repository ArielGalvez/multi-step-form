import React from "react";
import { IconTankYou } from "../../components/Icons/Icons";
import "./styles.css";

const text = `Thanks for confirming your subscription! We hope you have fun using our platform. 
If you have fun using our platform. 
If you event need support, please feel free to email us at support@loremgaming.com.`;

export const TankYou = () => {
  return (
    <div className="tank_you">
      <IconTankYou />
      <h4>Thank you!</h4>
      <p>{text}</p>
    </div>
  );
};
