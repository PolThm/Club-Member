import React, { forwardRef, HTMLProps } from "react";

export interface Props {
  onSubmit?: HTMLProps<HTMLFormElement>["onSubmit"];
  onInputClick?: () => void;
  emailDomain: string;
  autofocus: boolean;
  buttonDisabled: boolean;
  emailError: string;
}

export const FormLineComponent = forwardRef<HTMLInputElement, Props>(
  (
    { onSubmit, emailDomain, autofocus, buttonDisabled, onInputClick, emailError },
    ref
  ) => {
    let buttonClassName =
      "py-5 px-10 mt-4 lg:mt-0 lg:ml-6 uppercase rounded tracking-widest w-full lg:w-auto outline-none ";
    if (!buttonDisabled) {
      buttonClassName += "buttonActivated";
    }

    return (
      <form onSubmit={onSubmit}>
        <div className="lg:flex justify-center items-center w-full">
          <div className="p-5 flex items-center border border-gray-400 rounded w-full">
            <input
              className="outline-none w-full"
              name="email"
              placeholder="john.doe"
              autoFocus={autofocus}
              onClick={onInputClick}
              ref={ref}
            />
            <p>{emailDomain.toLowerCase()}</p>
          </div>
          <button
            className={buttonClassName}
            type="submit"
            disabled={buttonDisabled}
            data-testid="button-submit"
          >
            Submit
          </button>
        </div>
        <div
          className="text-red-500 pl-4 pt-2 absolute"
          data-testid="input-error"
        >
          {emailError}
        </div>
      </form>
    );
  }
);
