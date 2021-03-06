import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, removeData } from '../../redux/ducks/pokemon-table';
import TableItem from './TableItem/TableItem';
import TablePagination from './TablePagination/TablePagination';
import RefreshButton from '../../components/RefreshButton/RefreshButton';
import Loader from '../../components/Loader/Loader';
import { CARDS_PER_PAGE } from '../../utils/constants';
import './PokemonTable.scss';

const PokemonTable = (props) => {
  const {
    data, currentPage, fetchData,
  } = props;

  const renderTableItems = () => {
    let startIndex = currentPage - 1;
    if (startIndex > 0) startIndex *= CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    const items = [];
    for (startIndex; startIndex < endIndex; startIndex += 1) {
      if (data[startIndex]) {
        const { id, imageUrl, name } = data[startIndex];
        items.push(
          <TableItem
            id={id}
            imageUrl={imageUrl}
            name={name}
            key={id}
          />,
        );
      } else break;
    }
    return items;
  };

  useEffect(() => {
    if (!data) fetchData('v1/cards?page=1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemon-table">
      {data ? (
        <>
          <div className="pokemon-table__container">
            {renderTableItems()}
          </div>
          <TablePagination />
          <div className="pokemon-table__refresh-button">
            <RefreshButton />
          </div>
        </>
      ) : (
        <div className="pokemon-table__loader">
          <Loader />
        </div>
      ) }
    </div>
  );
};

export default connect((state) => {
  const { data, currentPage } = state.pokemonTableReducer;
  return {
    data,
    currentPage,
  };
}, (dispatch) => (
  {
    removeData: () => dispatch(removeData()),
    fetchData: (endPoint) => dispatch(fetchData(endPoint)),
  }
))(PokemonTable);
