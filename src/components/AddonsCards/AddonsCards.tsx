import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import AddonCard from "../AddonCard/AddonCard";
import CheckBox from "../CheckBox/CheckBox";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import "./styles.css";

type AddonsCardsProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const AddonsCards: FC<AddonsCardsProps> = ({
  handleChange,
  values,
}) => {
  return (
    <ul className="addon_cards">
      <AddonCard
        name="isOnlineService"
        value="Online service"
        description="Access to multiplayer games"
        price={values.isYearly ? "+$10/yr" : "+$1/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
      />
      <AddonCard
        name="isLargerStorage"
        value="Larger storage"
        description="Extra 1TB of cloud save"
        price={values.isYearly ? "+$20/yr" : "+$2/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
      />
      <AddonCard
        name="isCustomizableProfile"
        value="Customizable profile"
        description="Custom theme on your profile"
        price={values.isYearly ? "+$20/yr" : "+$2/mo"}
        isYearly={values.isYearly}
        handleChange={handleChange}
        values={values}
      />
    </ul>
  );
};

export default AddonsCards;
