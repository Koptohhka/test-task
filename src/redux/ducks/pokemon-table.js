import { getCards } from '../../services/getCards';

const SET_DATA = 'pokemon-table/SET_DATA';

const initialState = {
  isDataLoaded: false,
  data: null,
};

const fetchData = () => (
  async () => {
    const data = await getCards();
    return {
      type: SET_DATA,
      data,
    };
  }
);

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        isDataLoaded: true,
        data: action.data,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
export { fetchData };
