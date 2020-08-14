import React from 'react';
import './RefreshButton.scss';

const RefreshButton = (props) => {
  const { children, handler } = props;
  return (
    <button type="button" onClick={handler} className="refresh-button">{children}</button>
  );
};

export default RefreshButton;
