import { FormikProps } from "formik";
import React, { FC, ReactNode } from "react";
import { DataForm } from "../MultiStepForm/MultiStep.container";
import "./styles.css";

type TotalDetailProps = {
  handleChange: FormikProps<DataForm>["handleChange"];
  values: DataForm;
};

const TotalDetail: FC<TotalDetailProps> = (props) => {
  const { handleChange, values } = props;
  return (
    <div className="total_detail">
      <div className="total_detail_content">
        <div className="total_detail_header">
          <p className="two">
            <span>{`${values.plan} (${values.isYearly? 'Yearly': 'Monthly'})`}</span>
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
          <p>{values.isYearly ? "$90/yr" : "$9/mo"}</p>
        </div>
        {values.isOnlineService && (
          <div className="total_detail_body">
            <p>Online service</p>
            <p className="blue">{values.isYearly ? "+$10/yr" : "+$1/mo"}</p>
          </div>
        )}
        {values.isLargerStorage && (
          <div className="total_detail_body">
            <p>Larger storage</p>
            <p className="blue">{values.isYearly ? "+$20/yr" : "+$2/mo"}</p>
          </div>
        )}
        {values.isCustomizableProfile && (
          <div className="total_detail_body">
            <p>Customizable profile</p>
            <p className="blue">{values.isYearly ? "+$20/yr" : "+$2/mo"}</p>
          </div>
        )}
      </div>
      <div className="total_detail_result">
        <p>{`Total ${values.isYearly ? "(per year)" : "(per month)"}`}</p>
        <p className="purple">{values.isYearly ? "+$120/yr" : "+$12/mo"}</p>
      </div>
    </div>
  );
};

export default TotalDetail;
