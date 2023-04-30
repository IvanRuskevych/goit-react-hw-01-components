import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <th className={css.column}>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
