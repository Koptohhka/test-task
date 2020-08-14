import React from 'react';
import { connect } from 'react-redux';
import './TablePagination.scss';
import { NavLink } from 'react-router-dom';
import { setCurrentPage } from '../../redux/ducks/pokemon-table';

const TablePagination = (props) => {
  const { data, setCurrentPage } = props;
  return (
    <div className="table-pagination">
      <ul className="table-pagination__container">
        {(() => {
          const paginationCount = data.length / 10;
          const items = [];
          for (let i = 1; i <= paginationCount; i += 1) {
            items.push(
              <li
                tabIndex="1"
                role="button"
                key={i.toString()}
                onClick={() => {
                  setCurrentPage(i);
                }}
                className="table-pagination__item"
              >
                {i}
              </li>,
            );
          }
          return items;
        })()}
      </ul>
    </div>
  );
};

export default connect((state) => (
  {
    data: state.pokemonReducer.data,
  }
), (dispatch) => (
  {
    setCurrentPage: (value) => dispatch(setCurrentPage(value)),
  }
))(TablePagination);
