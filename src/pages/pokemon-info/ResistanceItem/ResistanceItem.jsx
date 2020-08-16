import React from 'react';
import './ResistanceItem.scss';

const ResistanceItem = (props) => {
  const { type, value } = props.resistance;
  return (
    <p className="resistance-item">
      <span>resistance: </span>
      {type}
      {' '}
      {value}
    </p>
  );
};

export default ResistanceItem;
