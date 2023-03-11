import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, FormikProps } from "formik";

import { MultiStepForm } from "./MultiStepForm";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import AddOns from "../AddOns/AddOns";
import FinishUp from "../FinishUp/FinishUp";
import TankYou from "../TankYou/TankYou";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export interface DataForm {
  name: string;
  email: string;
  phone: string;
  plan: string;
  isYearly: boolean;
  isOnlineService: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
}

const initialValues: DataForm = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  isYearly: false,
  isOnlineService: true,
  isLargerStorage: false,
  isCustomizableProfile: false,
};

const StepOneSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export const MultiStepContainer = () => {
  const [step, setStep] = useState(1);

  const nextStep = async (values: DataForm) => {
    if (step + 1 <= 5) {
      setStep(step + 1);
      if (step + 1 === 5) {
        // todo: make POST here
        console.table(values);
      }
    }
  };

  const prevStep = () => {
    if (step - 1 > 0) {
      setStep(step - 1);
    }
  };

  const goToStep = async ({
    stepToGo,
    formik,
  }: {
    stepToGo: number;
    formik: FormikProps<DataForm>;
  }) => {
    const errors = await formik.validateForm();
    formik.setErrors(errors);
    await formik.submitForm();
    if (Object.keys(errors).length === 0) {
      setStep(stepToGo);
    }
  };

  const componentStep = (props: FormikProps<DataForm>) => {
    const components: Record<number, React.ReactNode> = {
      1: <PersonalInfo {...props} />,
      2: <SelectPlan {...props} />,
      3: <AddOns {...props} />,
      4: <FinishUp {...props} />,
      5: <TankYou />,
    };
    return components[step];
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={nextStep}
      validationSchema={StepOneSchema}
    >
      {(props) => (
        <MultiStepForm
          step={step}
          prevStep={prevStep}
          goToStep={goToStep}
          formik={props}
        >
          {componentStep(props)}
        </MultiStepForm>
      )}
    </Formik>
  );
};
