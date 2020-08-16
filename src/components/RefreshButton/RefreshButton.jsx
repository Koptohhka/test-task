import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeActivePokemonData } from '../../redux/ducks/pokemon-info';
import { fetchData, removeData } from '../../redux/ducks/pokemon-table';
import { getRandomPageNumber } from '../../utils/utils';
import './RefreshButton.scss';

const RefreshButton = (props) => {
  const { fetchData, removeData, removeActivePokemonData } = props;

  const refreshButtonHandler = async () => {
    removeActivePokemonData();
    removeData();
    await fetchData(`v1/cards?page=${getRandomPageNumber()}`);
    props.history.push('/');
  };

  return (
    <button type="button" onClick={refreshButtonHandler} className="refresh-button">Refresh data</button>
  );
};

export default withRouter(connect(null, (dispatch) => (
  {
    removeActivePokemonData: () => dispatch(removeActivePokemonData()),
    removeData: () => dispatch(removeData()),
    fetchData: (endPoint) => dispatch(fetchData(endPoint)),
  }
))(RefreshButton));
