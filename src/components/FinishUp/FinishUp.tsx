import React, { useState } from "react";
import Form from "../Form/Form";
import TotalDetail from "../TotalDetail/TotalDetail";

type Props = {};

const FinishUp = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);


  return (
    <Form
      title="Finishing up"
      description="Double-check everthing looks OK before confirming."
    >
      <TotalDetail isYearly={isYearly} />
    </Form>
  );
};

export default FinishUp;
