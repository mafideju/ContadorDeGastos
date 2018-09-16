import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    Dashboard Component
    <ExpenseList />
    <ExpenseListFilters />
    <ExpensesSummary />
  </div>
);

export default ExpenseDashboardPage;
