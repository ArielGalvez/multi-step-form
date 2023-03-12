import { FormikProps } from "formik";
import React, { FC } from "react";
import {
  DataForm,
  formatPrice,
  prices,
} from "../../pages/MultiStepForm/MultiStep.container";
import "./styles.css";

type TotalDetailProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

export const TotalDetail: FC<TotalDetailProps> = (props) => {
  const { handleChange, values } = props;
  const planPrice = prices.plan[values.plan as "Arcade" | "Advanced" | "Pro"](
    values.isYearly
  );
  const OnlineServicePrice = prices.addons["isOnlineService"](values.isYearly);
  const LargerStoragePrice = prices.addons["isLargerStorage"](values.isYearly);
  const CustomizableProfilePrice = prices.addons["isCustomizableProfile"](
    values.isYearly
  );
  const calculateTotal = () => {
    let res = planPrice;
    if (values.isOnlineService) {
      res += OnlineServicePrice;
    }
    if (values.isLargerStorage) {
      res += LargerStoragePrice;
    }
    if (values.isCustomizableProfile) {
      res += CustomizableProfilePrice;
    }
    return res;
  };
  return (
    <div className="total_detail">
      <div className="total_detail_content">
        <div className="total_detail_header">
          <p className="plan">
            <span>{`${values.plan} (${
              values.isYearly ? "Yearly" : "Monthly"
            })`}</span>
            <label className="link">
              <input
                hidden
                type="checkbox"
                name="isYearly"
                onChange={handleChange}
                checked={values.isYearly}
              />
              Change
            </label>
          </p>
          <p>{formatPrice(values.isYearly, planPrice)}</p>
        </div>
        {values.isOnlineService && (
          <div className="total_detail_body">
            <p>Online service</p>
            <p className="blue">{`+${formatPrice(
              values.isYearly,
              OnlineServicePrice
            )}`}</p>
          </div>
        )}
        {values.isLargerStorage && (
          <div className="total_detail_body">
            <p>Larger storage</p>
            <p className="blue">{`+${formatPrice(
              values.isYearly,
              LargerStoragePrice
            )}`}</p>
          </div>
        )}
        {values.isCustomizableProfile && (
          <div className="total_detail_body">
            <p>Customizable profile</p>
            <p className="blue">{`+${formatPrice(
              values.isYearly,
              CustomizableProfilePrice
            )}`}</p>
          </div>
        )}
      </div>
      <div className="total_detail_result">
        <p>{`Total ${values.isYearly ? "(per year)" : "(per month)"}`}</p>
        <p className="purple">
          {values.isYearly
            ? `+$${calculateTotal()}/yr`
            : `+$${calculateTotal()}/mo`}
        </p>
      </div>
    </div>
  );
};
