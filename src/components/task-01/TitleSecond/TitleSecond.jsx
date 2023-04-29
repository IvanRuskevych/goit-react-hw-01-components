// import React from 'react';
import PropTypes from 'prop-types';

import css from './TitleSecond.module.css';

export default function TitleSecond({ title, cls }) {
  return <>{title && <h2 className={css[cls]}>{title}</h2>}</>;
}

TitleSecond.propTypes = {
  title: PropTypes.string.isRequired,
  cls: PropTypes.string.isRequired,
};
