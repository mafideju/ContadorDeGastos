import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = props => (
  <div className="content-container">
    {props.expenses.length === 0 ? (
      <h3>
        Adicione Uma Despesa para <Link to="/create">Começar sua Carteira</Link>
      </h3>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
