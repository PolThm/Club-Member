import React from 'react';
import {GDCContextProvider} from "../context";
import './App.css';
import Header from "./Header";
import EnterEmailSection from "./EnterEmailSection";
import Results from "./Results";

const App = () => {
  return (
    <GDCContextProvider>
      <Header/>
      <div className="md:flex">
        <EnterEmailSection/>
        <Results/>
      </div>
    </GDCContextProvider>
  );
};

export default App;
