import PropTypes from 'prop-types';
import TableHeader from '../TableHeader/TableHeader';
import TransactionList from '../TransactionList/TransactionList';

import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <TableHeader></TableHeader>
      <TransactionList items={items}></TransactionList>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
