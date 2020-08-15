import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemonData, removeActivePokemonData } from '../../redux/ducks/pokemon-info';
import './TableItem.scss';

const TableItem = (props) => {
  const [isLoaded, setLoadedState] = useState(false);
  const {
    name,
    imageUrl,
    id,
    fetchPokemonData,
    removeActivePokemonData,
  } = props;

  const onClickCardHanlder = () => {
    removeActivePokemonData();
    fetchPokemonData(id);
    props.history.push(`/pokemon-info/${name}`);
  };

  const onLoadImageHandler = () => {
    setLoadedState(true);
  };

  return (
    <div
      tabIndex="0"
      role="button"
      onClick={onClickCardHanlder}
      className="table-item"
    >
      <img
        onLoad={onLoadImageHandler}
        className="table-item__image"
        src={isLoaded ? imageUrl : (require('../../assets/images/pokeball.jpg'))}
        alt={name}
      />
    </div>
  );
};

export default withRouter(connect(null, (dispatch) => (
  {
    removeActivePokemonData: () => dispatch(removeActivePokemonData()),
    fetchPokemonData: (id) => dispatch(fetchPokemonData(id)),
  }
))(TableItem));
