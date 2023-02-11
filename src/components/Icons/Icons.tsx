import React from "react";
import iconArcade from './icon-arcade.svg';
import iconAdvanced from './icon-advanced.svg';
import iconPro from './icon-pro.svg';
import "./styles.css";


export const IconArcade = () => {
  return (
    <img src={iconArcade} width={40} height={40} className="icon_arcade" alt="icon-arcade" />
  );
};

export const IconAdvanced = () => {
  return (
    <img src={iconAdvanced} width={40} height={40} className="icon_advanced" alt="icon-advanced" />
  );
};

export const IconPro = () => {
  return (
    <img src={iconPro} width={40} height={40} className="icon_pro" alt="icon-pro" />
  );
};
