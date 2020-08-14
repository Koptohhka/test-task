import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, setDataLoadedState, setCurrentPage } from '../../redux/ducks/pokemon-table';
import TableItem from './TableItem';
import TablePagination from './TablePagination';
import { CARDS_PER_PAGE } from '../../utils/constants';
import './PokemonTable.scss';

const PokemonTable = (props) => {
  const {
    isDataLoaded, data, currentPage, fetchData,
  } = props;

  const renderTableItems = () => {
    let startIndex = currentPage - 1;
    if (startIndex > 0) {
      startIndex *= CARDS_PER_PAGE;
    }
    const endIndex = startIndex + CARDS_PER_PAGE;
    const items = [];
    for (startIndex; startIndex < endIndex; startIndex += 1) {
      const { id, imageUrl, name } = data[startIndex];
      items.push(
        <TableItem
          id={id}
          imageUrl={imageUrl}
          key={name}
        />,
      );
    }
    return items;
  };

  useEffect(() => {
    fetchData('v1/cards?page=1');
  }, []);

  return (
    <div className="pokemon-table">
      {isDataLoaded ? (
        <>
          {renderTableItems()}
          <TablePagination />
        </>
      ) : <h1>Loading</h1> }
    </div>
  );
};

export default connect((state) => {
  const { isDataLoaded, data, currentPage } = state.pokemonReducer;
  return {
    isDataLoaded,
    data,
    currentPage,
  };
}, (dispatch) => (
  {
    setDataLoadedState: () => dispatch(setDataLoadedState),
    fetchData: (endPoint) => dispatch(fetchData(endPoint)),
  }
))(PokemonTable);
