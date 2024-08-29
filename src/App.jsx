import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  // userValue with default value
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  // handleUser Input
  const handleUserInput = (objectKey, newValue) => {
    setUserInput((prevalue) => {
      return { ...prevalue, [objectKey]: +newValue };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleUserInput={handleUserInput} />
      {userInput.duration > 1 ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Error</p>
      )}
    </>
  );
};

export default App;
