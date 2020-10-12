import React from 'react';
import {GDCContextProvider} from "../context";
import './App.css';
import Header from "./Header";
import EnterEmailSection from "./EnterEmailSection";
import Results from "./Results";
import ExampleComponent from "./ExampleComponent";

const App = () => {
  return (
    <GDCContextProvider>
      <ExampleComponent/>
      <Header/>
      <div className="md:flex">
        <EnterEmailSection/>
        <Results/>
      </div>
    </GDCContextProvider>
  );
};

export default App;
