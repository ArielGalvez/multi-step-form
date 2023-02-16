import React, { FC, useState } from "react";
import AddonCard from "../AddonCard/AddonCard";
import CheckBox from "../CheckBox/CheckBox";
import "./styles.css";

type AddonsCardsProps = {
  isYearly: boolean;
};

const AddonsCards: FC<AddonsCardsProps> = ({ isYearly }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [isLarger, setIsLarger] = useState(true);
  const [isCustomizable, setIsCustomizable] = useState(false);
  return (
    <ul className="addon_cards">
      <AddonCard
        name="Online service"
        description="Access to multiplayer games"
        price={isYearly ? "+$10/yr" : "+$1/mo"}
        isYearly={isYearly}
        selected={isOnline}
      >
        <CheckBox active={isOnline} onChange={setIsOnline} />
      </AddonCard>
      <AddonCard
        name="Larger storage"
        description="Extra 1TB of cloud save"
        price={isYearly ? "+$20/yr" : "+$2/mo"}
        isYearly={isYearly}
        selected={isLarger}
      >
        <CheckBox active={isLarger} onChange={setIsLarger} />
      </AddonCard>
      <AddonCard
        name="Customizable profile"
        description="Custom theme on your profile"
        price={isYearly ? "+$20/yr" : "+$2/mo"}
        isYearly={isYearly}
        selected={isCustomizable}
      >
        <CheckBox active={isCustomizable} onChange={setIsCustomizable} />
      </AddonCard>
    </ul>
  );
};

export default AddonsCards;
