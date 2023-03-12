import React from "react";
import { FormikProps } from "formik";
import { AddonCard } from "../AddonCard/AddonCard";
import {
  DataForm,
  formatPrice,
  prices,
} from "../../pages/MultiStepForm/MultiStep.container";
import "./styles.css";

type AddonsCardsProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const AddonsCards: React.FC<AddonsCardsProps> = ({
  handleChange,
  values,
}) => {
  const addons = [
    {
      name: "isOnlineService",
      value: "Online service",
      description: "Access to multiplayer games",
      price: `+${formatPrice(
        values.isYearly,
        prices.addons["isOnlineService"](values.isYearly)
      )}`,
    },
    {
      name: "isLargerStorage",
      value: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: `+${formatPrice(
        values.isYearly,
        prices.addons["isLargerStorage"](values.isYearly)
      )}`,
    },
    {
      name: "isCustomizableProfile",
      value: "Customizable profile",
      description: "Custom theme on your profile",
      price: `+${formatPrice(
        values.isYearly,
        prices.addons["isCustomizableProfile"](values.isYearly)
      )}`,
    },
  ];
  return (
    <ul className="addon_cards">
      {addons.map((addon) => (
        <AddonCard
          key={addon.name}
          name={addon.name as keyof DataForm}
          value={addon.value}
          description={addon.description}
          price={addon.price}
          isYearly={values.isYearly}
          handleChange={handleChange}
          values={values}
        />
      ))}
    </ul>
  );
};
