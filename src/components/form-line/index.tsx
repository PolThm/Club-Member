import React from "react";
import { useForm } from "react-hook-form";
import { useGDCContent } from "../../context";
import { FormLineComponent } from "./component";

interface Props {
  emailDomain: string;
  autofocus: boolean;
  buttonDisabled: boolean;
  onInputClick: () => void;
}

const FormLine = (props: Props) => {
  const { submitEmail } = useGDCContent();

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values: any, e: any) => {
    const emailAddress = values.email + props.emailDomain;
    submitEmail(emailAddress);
    e.target.reset();
  };

  return (
    <FormLineComponent
      ref={register({
        required: "Email required",
        pattern: {
          value: /^[A-Z0-9._%+-]/i,
          message: "Wrong email",
        },
      })}
      onSubmit={handleSubmit(onSubmit)}
      emailError={errors.email && errors.email.message}
      {...props}
    />
  );
};

export default FormLine;
