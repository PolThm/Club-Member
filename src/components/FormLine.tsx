import React from 'react';
import {useForm} from 'react-hook-form';
import {useGDCContent} from "../context";

interface Email {
  email: string,
  autofocus: boolean,
  buttonDisabled: boolean,
  onInputClick: () => void
}

const FormLine = (props: Email) => {
  const {submitEmail} = useGDCContent();

  const {handleSubmit, register, errors} = useForm();
  const onSubmit = (values: any, e: any) => {
    const emailAddress = values.email + props.email;
    submitEmail(emailAddress.toLowerCase());
    e.target.reset();
  }

  let buttonClassName = "py-5 px-10 mt-4 lg:mt-0 lg:ml-6 uppercase rounded tracking-widest w-full lg:w-auto outline-none ";

  if (!props.buttonDisabled) {
    buttonClassName += "buttonActivated";
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="lg:flex justify-center items-center w-full">
        <div className="p-5 flex items-center border border-gray-400 rounded w-full">
          <input
            className="outline-none w-full"
            name="email"
            placeholder="john.doe"
            autoFocus={props.autofocus}
            onClick={props.onInputClick}
            ref={register({
              required: "Email required",
              pattern: {
                value: /^[A-Z0-9._%+-]/i,
                message: "Wrong email"
              }
            })}
          />
          <p>{props.email}</p>
        </div>
        <button className={buttonClassName} type="submit" disabled={props.buttonDisabled} data-testid="button-submit">Submit</button>
      </div>
      <div className="text-red-500 pl-4 pt-2 absolute" data-testid="input-error">
        {errors.email && errors.email.message}
      </div>
    </form>
  );
};

export default FormLine;
