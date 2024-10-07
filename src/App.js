import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'some paper',
    amount: 94.12, 
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'some paper',
    amount: 940.12, 
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e3',
    title: 'some paper',
    amount: 945.12, 
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e4',
    title: 'some paper',
    amount: 9.12, 
    date: new Date(2024, 7, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
