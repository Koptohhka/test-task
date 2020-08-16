import React from 'react';
import './AttackItem.scss';

const AttackItem = (props) => {
  const {
    cost,
    name,
    damage,
    text,
  } = props.info;
  return (
    <div className="attack-item">
      <p className="attack-item__name">{name}</p>
      <p className="attack-item__description">{text}</p>
    </div>
  );
};

export default AttackItem;
