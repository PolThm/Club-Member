import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { LocalDb, useLocalDb } from "./local-db";

interface Context
  extends Pick<LocalDb, "dataBase" | "results" | "submitEmail"> {}

const willThrow = () => {
  throw new Error("Context is not initialized");
};

const defaultValue: Context = {
  dataBase: ["isLoading"],
  results: [],
  submitEmail: willThrow,
};

const Context = createContext(defaultValue);

export const useGDCContent = () => useContext(Context);

export const Provider = (props: PropsWithChildren<{}>) => {
  const { setDataBase, dataBase, results, submitEmail } = useLocalDb();

  useEffect(() => {
    const fetchDB = async () => {
      const result = await axios(
        "https://www.json-generator.com/api/json/get/bQrQrLgMEi?indent=2"
      );
      setDataBase(result.data);
    };
    fetchDB();
  }, [setDataBase]);

  // Make the context object:
  const GDCContext: Context = {
    dataBase,
    results,
    submitEmail,
  };

  // Pass the value in provider and return
  return (
    <Context.Provider value={GDCContext}>{props.children}</Context.Provider>
  );
};
