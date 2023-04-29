import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
  // console.log('Transaction--> type: ', { type });

  return (
    <tr>
      <th className={css.column}>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
}

Transaction.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
