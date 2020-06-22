import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

export default function Stars(props) {
  const { count } = props;
  if (!Number(count) || count < 1 || count > 5) {
    return false;
  }

  const starsString = [];
  for (let i = 0; i < count; i += 1) {
    starsString.push(1);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {starsString.map((itemStar, index) => <li key={index}><Star /></li>)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
