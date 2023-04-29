import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

export default function Section({ children, cls }) {
  return <section className={css[cls]}>{children}</section>;
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
