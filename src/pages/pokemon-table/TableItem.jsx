import React from 'react';
import './TableItem.scss';

const TableItem = (props) => {
  const { name, imageUrl } = props;
  return (
    <div className="table-item">
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default TableItem;
