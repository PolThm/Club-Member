import React from 'react';

interface Result {
  member: boolean
  email: string
}

const Result = (props: Result) => {
  let pClassName = "text-red-500 overflow-hidden";
  let pText = `BOOOH we don't know ${props.email}`;

  if (props.member) {
    pClassName = "text-green-500 overflow-hidden";
    pText = `${props.email} is a club member`;
  }

  return (
    <div className="w-full bg-white p-8 mb-5 rounded shadow-md">
      <p className={pClassName}>{pText}</p>
    </div>
  );
};

export default Result;
