import { calculateInvestmentResults, formatter } from "../util/investment";
const Results = ({ userInput }) => {
  const userInputData = calculateInvestmentResults(userInput);

  //Total Interest

  let totalInterest = 0;
  let investedCapital = 0;
  let duration = userInput.duration;
  console.log(duration);

  const initalInvest =
    userInputData[0].valueEndOfYear -
    userInputData[0].annualInvestment -
    userInputData[0].interest;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year) </th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {userInputData.map(
            (result) => (
              (totalInterest =
                result.valueEndOfYear -
                result.annualInvestment * result.year -
                initalInvest),
              (investedCapital = result.valueEndOfYear - totalInterest),
              (
                <tr key={result.year}>
                  <td>{result.year}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCapital)}</td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Results;
