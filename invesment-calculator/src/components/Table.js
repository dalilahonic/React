import TableColumns from './TableColumns';
import TableRows from './TableRows';
import { useState } from 'react';

function Table(props) {
  const [enteredData, setEnteredData] = useState(
    props.dataToTable
  );

  const [yearNumber, setYearNumber] = useState(1);

  let interestValue =
    (Number(enteredData.expectedInterest) / 100) *
    Number(enteredData.currentSavings);

  let totalSavingsValue =
    Number(enteredData.currentSavings) +
    Number(enteredData.yearlySavings) +
    Number(interestValue);

  console.log(totalSavingsValue);

  let columns = [];
  for (let i = 0; i < props.invesmentDurationProp; i++) {
    columns.push(
      <TableColumns
        yearNumberProp={yearNumber}
        totalSavings={totalSavingsValue}
        interest={interestValue}
        totalInterest={interestValue}
        investedCapital={totalSavingsValue - interestValue}
        key={i}
      />
    );
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
