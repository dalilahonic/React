import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  function saveExpanseDataHandler(enteredExpenseData) {
    const expanseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expanseData);
    props.onAddExpense(expanseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpanseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
