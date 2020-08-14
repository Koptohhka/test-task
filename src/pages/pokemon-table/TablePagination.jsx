import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TablePagination.scss';
import { setCurrentPage, setPaginationIndex } from '../../redux/ducks/pokemon-table';
import { CARDS_PER_PAGE, PAGINATION_NUMBER_PER_PAGE } from '../../utils/constants';

const TablePagination = (props) => {
  const {
    data,
    setCurrentPage,
    currentPage,
    paginationIndex,
    setPaginationIndex,
  } = props;
  const [paginationItemsNumber] = useState(data.length / CARDS_PER_PAGE);

  const renderPaginationItems = () => {
    const start = paginationIndex;
    const finish = paginationIndex + PAGINATION_NUMBER_PER_PAGE;
    const items = [];
    for (let i = start + 1; i <= finish; i += 1) {
      let paginationClasses = 'table-pagination__item';
      if (i === currentPage) paginationClasses += ' table-pagination__item--active';
      items.push(
        <li
          role="button"
          key={i.toString()}
          onClick={() => {
            setCurrentPage(i);
          }}
          className={paginationClasses}
        >
          {i}
        </li>,
      );
    }
    return items;
  };

  const leftArrowClickHandler = () => {
    if (currentPage > 1) {
      if (paginationIndex > 0) {
        setPaginationIndex(paginationIndex - 1);
        setCurrentPage(paginationIndex);
      } else {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  const rightArrowClickHandler = () => {
    if (currentPage < paginationItemsNumber) {
      if (paginationIndex < PAGINATION_NUMBER_PER_PAGE) {
        setPaginationIndex(paginationIndex + 1);
        setCurrentPage((paginationIndex + 1) + PAGINATION_NUMBER_PER_PAGE);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return (
    <div className="table-pagination">
      <ul className="table-pagination__container">
        <li
          role="button"
          onClick={leftArrowClickHandler}
          className="table-pagination__item"
        >
          «
        </li>
        {renderPaginationItems()}
        <li
          onClick={rightArrowClickHandler}
          role="button"
          className="table-pagination__item"
        >
          »
        </li>
      </ul>
    </div>
  );
};

export default connect((state) => {
  const { data, currentPage, paginationIndex } = state.pokemonTableReducer;
  return {
    data,
    currentPage,
    paginationIndex,
  };
}, (dispatch) => (
  {
    setPaginationIndex: (value) => dispatch(setPaginationIndex(value)),
    setCurrentPage: (value) => dispatch(setCurrentPage(value)),
  }
))(TablePagination);
