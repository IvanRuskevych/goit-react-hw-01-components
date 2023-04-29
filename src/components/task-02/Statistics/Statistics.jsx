// import React from 'react';
import PropTypes from 'prop-types';

import SpanText from '../SpanText/SpanText';
import css from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
          <SpanText label={label} percentage={percentage}></SpanText>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
