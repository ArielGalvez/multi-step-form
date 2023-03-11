import { Form as FormFormik, FormikProps } from "formik";
import React, { FC } from "react";
import Button from "../Button/Button";
import Steps from "../Steps/Steps";
import { DataForm } from "./MultiStep.container";
import "./styles.css";

export interface MultiStepFormProps {
  children: React.ReactNode;
  step: number;
  goToStep: (data: { stepToGo: number; formik: any }) => void;
  prevStep: () => void;
  formik: FormikProps<DataForm>;
}

export const MultiStepForm: FC<MultiStepFormProps> = (props) => {
  const { children, formik, ...rest } = props;
  return (
    <FormFormik className="multi-step-form">
      <nav className="nav">
        <Steps formik={formik} {...rest} />
      </nav>
      <section className="content-bg">
        <div className="content">{children}</div>
      </section>
      {rest.step !== 5 && (
        <section className="actions">
          <div className="buttons">
            <Button
              text="Go Back"
              variant="secondary"
              type="button"
              onClick={rest.prevStep}
            />
            <Button text="Next Step" variant="primary" type="submit" />
          </div>
        </section>
      )}
    </FormFormik>
  );
};
