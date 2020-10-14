import React from "react";
import Result from "./Result";
import { useGDCContent } from "../context";

const Results = () => {
  const { results } = useGDCContent();

  let listOfResults = results.map((result, index) => {
    return <Result key={index} member={result.member} email={result.email} />;
  });

  return (
    <div className="results px-10">
      <h2 className="pt-20 pb-16 text-center text-4xl">Results</h2>
      <div className="pb-16">{listOfResults}</div>
    </div>
  );
};

export default Results;
