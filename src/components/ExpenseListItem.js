import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      {`Valor: R${numeral(amount / 100).format('$0,0.00')} Reais`} -{' '}
      {`Vencimento: ${moment(createdAt).format('DD/MM/YYYY')}`}
    </p>
  </div>
);

export default ExpenseListItem;
