import { setErrorState } from './app';
import getCards from '../../services/getCards';

const SET_ACTIVE_POKEMON_DATA = 'pokemon-info/SET_ACTIVE_POKEMON_DATA';

const initialState = {
  activePokemonData: null,
};

const fetchPokemonData = (id) => (
  async (dispatch) => {
    const data = await getCards(`/v1/cards/${id}`);
    if (data) {
      dispatch({
        type: SET_ACTIVE_POKEMON_DATA,
        activePokemonData: data.data.card,
      });
    } else dispatch(setErrorState());
  }
);

const removeActivePokemonData = () => (
  {
    type: SET_ACTIVE_POKEMON_DATA,
    activePokemonData: null,
  }
);

const pokemonInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_POKEMON_DATA:
      return {
        ...state,
        activePokemonData: action.activePokemonData,
      };
    default:
      return state;
  }
};

export default pokemonInfoReducer;
export { fetchPokemonData, removeActivePokemonData };
