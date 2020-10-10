import React, {createContext, PropsWithChildren, useContext, useEffect, useState} from "react";
import axios from 'axios';

interface Member {
  member: boolean;
  email: string;
}

interface Context {
  // dataBase is an array of emails
  dataBase: string[],
  results: Member[],
  submitEmail: (email: string) => void
}

const willThrow = () => {
  throw new Error('Context is not initialized');
}

const defaultValue: Context = {
  dataBase: ["isLoading"],
  results: [],
  submitEmail: willThrow
};

const Context = createContext(defaultValue);

export const useGDCContent = () => useContext(Context);

export const Provider = (props: PropsWithChildren<{}>) => {
  const {children} = props;

  useEffect( () => {
    const fetchDB = async () => {
      const result = await axios(
        'http://www.json-generator.com/api/json/get/bQrQrLgMEi?indent=2',
      );
      setDataBase(result.data)
    }
    fetchDB();
  }, []);

  // Use State to keep the values
  const [dataBase, setDataBase] = useState(defaultValue.dataBase);
  const [results, setResults] = useState(defaultValue.results);

  const submitEmail: Context['submitEmail'] = (email) => {
    const member = dataBase.includes(email);
    const newResult = {member, email};
    setResults((oldResults) => [newResult, ...oldResults]);
  };

  // Make the context object:
  const GDCContext: Context = {
    dataBase,
    results,
    submitEmail
  };

  // Pass the value in provider and return
  return <Context.Provider value={GDCContext}>{children}</Context.Provider>;
};
