import { useState } from "react";

export interface Member {
  member: boolean;
  email: string;
}

export interface LocalDb {
  // dataBase is an array of emails
  setDataBase: (db: string[]) => void;
  dataBase: string[];
  results: Member[];
  submitEmail: (email: string) => void;
}

export function useLocalDb(): LocalDb {
  // Use State to keep the values
  const [dataBase, setDataBase] = useState<LocalDb["dataBase"]>(["isLoading"]);
  const [results, setResults] = useState<LocalDb["results"]>([]);

  const submitEmail: LocalDb["submitEmail"] = (email) => {
    const member = dataBase.includes(email);
    const newResult = { member, email };
    setResults((oldResults) => [newResult, ...oldResults]);
  };

  return {
    setDataBase,
    dataBase,
    results,
    submitEmail,
  };
}
