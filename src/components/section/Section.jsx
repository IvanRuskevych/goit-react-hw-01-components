import React from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

export default function Section({ title, children, cssVariant }) {
  return (
    <section className={css[cssVariant]}>
      {title && <h2 className="sectionTitle">{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
