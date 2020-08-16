import getCards from '../../services/getCards';
import { setErrorState } from './app';

const SET_DATA = 'pokemon-table/SET_DATA';
const SET_CURRENT_PAGE = 'pokemon-table/SET_CURRENT_PAGE';
const SET_PAGINATION_INDEX = 'pokemon-table/SET_PAGINATION_INDEX';

const initialState = {
  data: null,
  currentPage: 1,
  paginationIndex: 0,
};

const setPaginationIndex = (value) => ({
  type: SET_PAGINATION_INDEX,
  paginationIndex: value,
});

const setCurrentPage = (value) => ({
  type: SET_CURRENT_PAGE,
  currentPage: value,
});

const removeData = () => ({
  type: SET_DATA,
  data: null,
});

const fetchData = (endPoint) => (
  async (dispatch) => {
    const data = await getCards(endPoint);
    if (data) {
      dispatch(
        {
          type: SET_DATA,
          data: data.data.cards,
        },
      );
    } else dispatch(setErrorState());
  }
);

const pokemonTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGINATION_INDEX:
      return {
        ...state,
        paginationIndex: action.paginationIndex,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
        currentPage: 1,
        paginationIndex: 0,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default pokemonTableReducer;
export {
  fetchData, setCurrentPage, setPaginationIndex, removeData,
  initialState,
};
