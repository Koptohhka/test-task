import { combineReducers } from 'redux';
import pokemonTableReducer from './ducks/pokemon-table';
import pokemonInfoReducer from './ducks/pokemon-info';

const rootReducer = combineReducers({
  pokemonTableReducer,
  pokemonInfoReducer,
});

export default rootReducer;
