import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';

import css from './TransactionList.module.css';

export default function TransactionList({ items }) {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></Transaction>
        );
      })}
    </tbody>
  );
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
