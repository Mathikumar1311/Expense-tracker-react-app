import React from 'react';
import './ExpensesFilter.css'; // Make sure to create this CSS file for styling

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); // Call the function passed from the parent component
  };

  return (
    <div className="expenses-filter">
        <label>Filter by year</label>
      <div className="expenses-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
