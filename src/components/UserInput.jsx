import React from "react";

const UserInput = ({ userInput, handleUserInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) =>
              handleUserInput("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>annualInvestment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(e) =>
              handleUserInput("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expectedReturn</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleUserInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(e) => handleUserInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
