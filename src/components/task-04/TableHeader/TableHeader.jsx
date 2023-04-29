// import PropTypes from 'prop-types';

import css from './TableHeader.module.css';

export default function TableHeader() {
  return (
    <thead>
      <tr>
        <th className={css.tableText}>Type</th>
        <th className={css.tableText}>Amount</th>
        <th className={css.tableText}>Currency</th>
      </tr>
    </thead>
  );
}
