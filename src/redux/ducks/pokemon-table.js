import getCards from '../../services/getCards';

const SET_DATA = 'pokemon-table/SET_DATA';
const SET_DATA_LOADED = 'pokemon-table/SET_DATA_LOADED';
const SET_CURRENT_PAGE = 'pokemon-table/SET_CURRENT_PAGE';

const initialState = {
  isDataLoaded: false,
  data: null,
  currentPage: 1,
};

const setCurrentPage = (value) => ({
  type: SET_CURRENT_PAGE,
  currentPage: value,
});

const setDataLoadedState = (value) => ({
  type: SET_DATA_LOADED,
  isDataLoaded: value,
});

const fetchData = (endPoint) => (
  async (dispatch) => {
    const data = await getCards(endPoint);
    dispatch(
      {
        type: SET_DATA,
        data: data.data.cards,
      },
    );
  }
);

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
        isDataLoaded: true,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: action.isDataLoaded,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
export { fetchData, setDataLoadedState, setCurrentPage };
