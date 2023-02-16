import React, { FC, ReactNode } from "react";
import "./styles.css";

type TotalDetailProps = {
  isYearly: boolean;
};

const TotalDetail: FC<TotalDetailProps> = (props) => {
  const { isYearly } = props;
  return (
    <div className="total_detail">
      <div className="total_detail_content">
        <div className="total_detail_header">
          <p className="two">
            <span>{"Arcade (Monthly)"}</span>
            <button className="link">Change</button>
          </p>
          <p>{isYearly ? "$90/yr" : "$9/mo"}</p>
        </div>
        <div className="total_detail_body">
          <p>Online service</p>
          <p className="blue">{isYearly ? "+$10/yr" : "+$1/mo"}</p>
        </div>
        <div className="total_detail_body">
          <p>Larger storage</p>
          <p className="blue">{isYearly ? "+$20/yr" : "+$2/mo"}</p>
        </div>
      </div>
      <div className="total_detail_result">
        <p>{`Total ${isYearly ? "(per year)" : "(per month)"}`}</p>
        <p className="purple">{isYearly ? "+$120/yr" : "+$12/mo"}</p>
      </div>
    </div>
  );
};

export default TotalDetail;
