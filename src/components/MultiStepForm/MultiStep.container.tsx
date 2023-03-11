import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import { MultiStepForm } from "./MultiStepForm";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

type Props = {};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const MultiStepContainer = (props: Props) => {
  const [step, setStep] = useState(1);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const StepOneSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });
  console.log(step);

  const nextStep = () => {
    if (step + 1 <= 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step - 1 > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => nextStep()}
      validationSchema={StepOneSchema}
    >
      {(props) => (
        <MultiStepForm nextStep={nextStep} prevStep={prevStep}>
          <PersonalInfo {...props} />
        </MultiStepForm>
      )}
    </Formik>
  );
};
