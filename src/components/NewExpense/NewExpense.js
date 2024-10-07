import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsFormVisible(false); // Hide form after saving
    };

    const handleAddExpenseClick = () => {
        setIsFormVisible(true); // Show the form
    };

    const handleCancelClick = () => {
        setIsFormVisible(false); // Hide the form
    };

    return (
        <div className='new-expense'>
            {!isFormVisible && (
                <button onClick={handleAddExpenseClick}>Add Expense</button>
            )}
            {isFormVisible && (
                <div>
                    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default NewExpense;
