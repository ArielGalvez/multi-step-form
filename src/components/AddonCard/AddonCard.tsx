import { FormikProps } from "formik";
import React, { FC, ReactNode } from "react";
import CheckBox from "../CheckBox/CheckBox";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import "./styles.css";

type AddonCardProps = {
  name: keyof DataForm;
  value: string;
  description: string;
  price: string;
  isYearly: boolean;
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const AddonCard: FC<AddonCardProps> = (props) => {
  const { name, value, description, isYearly, price, handleChange, values } = props;
  return (
    <li>
      <label className={`addon_card ${values[name] && 'selected'}`}>
      <CheckBox
          handleChange={handleChange}
          values={values}
          name={name}
        />
      <div className="addon_card__content">
        <h4>{value}</h4>
        <span>{description}</span>
        {isYearly && <p>2 months free</p>}
      </div>
      <p className="addon_card__price">{price}</p>
      </label>
    </li>
  );
};

export default AddonCard;
