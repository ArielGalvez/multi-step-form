import React, { useState } from "react";
import AddonsCards from "../AddonsCards/AddonsCards";
import Form from "../Form/Form";

type Props = {};

const AddOns = (props: Props) => {
  const [isYearly, setIsYearly] = useState(false);

  const setYearly = (active: boolean) => {
    setIsYearly(active)
  }

  return (
    <Form
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsCards isYearly={isYearly} />
    </Form>
  );
};

export default AddOns;
