import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchData, removeData } from '../../redux/ducks/pokemon-table';
import { getRandomPageNumber } from '../../utils/utils';
import './RefreshButton.scss';

const RefreshButton = (props) => {
  const { fetchData, removeData } = props;

  const refreshButtonHandler = () => {
    removeData();
    fetchData(`v1/cards?page=${getRandomPageNumber()}`);
    props.history.push('/pokemon-info');
  };

  return (
    <button type="button" onClick={refreshButtonHandler} className="refresh-button">Refresh data</button>
  );
};

export default withRouter(connect(null, (dispatch) => (
  {
    removeData: () => dispatch(removeData()),
    fetchData: (endPoint) => dispatch(fetchData(endPoint)),
  }
))(RefreshButton));
