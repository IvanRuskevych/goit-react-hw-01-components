import React from 'react';
import PropTypes from 'prop-types';

import css from './SpanText.module.css';

export default function SpanText({ label, percentage }) {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
}

SpanText.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
