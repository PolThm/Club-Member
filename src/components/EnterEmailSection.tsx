import React, { useState } from "react";
import FormLine from "./form-line";
import { useGDCContent } from "../context";
import ClipLoader from "react-spinners/ClipLoader";

enum Form {
  form1,
  form2,
}

const EnterEmailSection = () => {
  const [activated, setActivated] = useState<Form>(Form.form1);
  const [displayValidEmails, setDisplayValidEmails] = useState<boolean>(false);
  const { dataBase } = useGDCContent();

  const handleFormClick = (formLine: Form) => () => {
    setActivated(formLine);
  };

  let validEmailsSection;
  if (!displayValidEmails) {
    validEmailsSection = (
      <div className="text-center ">
        <p
          className="smiley cursor-pointer"
          onClick={() => setDisplayValidEmails(true)}
        >
          &#128521;
        </p>
        <p>Click me!</p>
      </div>
    );
  } else {
    validEmailsSection = (
      <p className="text-center border p-3 rounded shadow-md">
        <span className="underline">Try with these addresses:</span>
        <br />
        nicolas@outlook.fr
        <br />
        celine@outlook.fr
        <br />
        kevin@gmail.com
        <br />
        sylvie@gmail.com
        <br />
        <span
          className="smiley cursor-pointer"
          onClick={() => setDisplayValidEmails(false)}
        >
          &#128521;
        </span>
      </p>
    );
  }

  let content;
  if (dataBase[0] === "isLoading") {
    content = (
      <div className="text-center pt-64 mt-8">
        <ClipLoader size={50} color={"#802254"} />
      </div>
    );
  } else {
    content = (
      <div>
        <h2 className="mt-20 text-center text-4xl">Enter your email address</h2>
        <div className="mt-16 mb-24">
          <FormLine
            email="@gmail.com"
            autofocus={true}
            buttonDisabled={activated !== Form.form1}
            onInputClick={handleFormClick(Form.form1)}
          />
          <div className="divider flex items-center text-gray-500">
            <div className="h-0 border-b border-gray-400 w-1/2 mr-4" />
            OR
            <div className="h-0 border-b border-gray-400 w-1/2 ml-4" />
          </div>
          <FormLine
            email="@outlook.fr"
            autofocus={false}
            buttonDisabled={activated !== Form.form2}
            onInputClick={handleFormClick(Form.form2)}
          />
        </div>
        {validEmailsSection}
      </div>
    );
  }

  return <div className="emailField px-10">{content}</div>;
};

export default EnterEmailSection;
