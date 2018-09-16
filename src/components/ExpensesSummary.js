import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import GetExpensesTotal from '../selectors/GetExpensesTotal';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const plural = expenseCount === 1 ? 'item' : 'items';
  const totalGastos = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h5>
        Total de R{totalGastos} Reais em gastos divididos em {expenseCount}{' '}
        {plural}.
      </h5>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: GetExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
