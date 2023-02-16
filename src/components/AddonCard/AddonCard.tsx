import React, { FC, ReactNode } from "react";
import "./styles.css";

type AddonCardProps = {
  children: ReactNode;
  name: string;
  description: string;
  price: string;
  isYearly: boolean;
  selected?: boolean;
};

const AddonCard: FC<AddonCardProps> = (props) => {
  const { children, name, description, isYearly, price, selected = false } = props;
  return (
    <li className={`addon_card ${selected && 'selected'}`}>
      {children}
      <div className="addon_card__content">
        <h4>{name}</h4>
        <span>{description}</span>
        {isYearly && <p>2 months free</p>}
      </div>
      <p className="addon_card__price">{price}</p>
    </li>
  );
};

export default AddonCard;
