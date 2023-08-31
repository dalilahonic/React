import TableColumns from './TableColumns';
import TableRows from './TableRows';

function Table(props) {
  let enteredData = props.dataToTable;

  // console.log(enteredData);

  let interestValue =
    Number(enteredData.currentSavings) *
    (Number(enteredData.expectedInterest) / 100);

  let totalSavingsValue =
    Number(enteredData.currentSavings) +
    Number(enteredData.yearlySavings) +
    Number(interestValue);

  let columns = [];
  let interests = [];
  for (let i = 0; i < props.invesmentDurationProp; i++) {
    interests.push(interestValue);

    let totalInterestValue = interests.reduce(
      (acc, curr) => acc + curr
    );

    columns.push(
      <TableColumns
        yearNumberProp={i + 1}
        totalSavings={totalSavingsValue.toFixed(2)}
        interest={interestValue.toFixed(2)}
        totalInterest={totalInterestValue.toFixed(2)}
        investedCapital={(
          totalSavingsValue - totalInterestValue
        ).toFixed(2)}
        key={i}
      />
    );

    interestValue =
      (enteredData.expectedInterest / 100) *
        (Number(interestValue) +
          Number(enteredData.yearlySavings)) +
      interestValue;

    totalSavingsValue =
      Number(totalSavingsValue) +
      Number(enteredData.yearlySavings) +
      Number(interestValue);
  }

  // console.log(props.invesmentDurationProp);
  // console.log(columns);
  // console.log(props.dataToTable);

  return (
    <table
      className='result'
      investmentDuration={props.invesmentDuration}
    >
      <TableRows></TableRows>
      <tbody>{columns}</tbody>
    </table>
  );
}

export default Table;
