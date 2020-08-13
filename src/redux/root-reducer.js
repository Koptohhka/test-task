import { combineReducers } from 'redux';
import pokemonReducer from './ducks/pokemon-table';

const rootReducer = combineReducers({
  pokemonReducer,
});

export default rootReducer;
