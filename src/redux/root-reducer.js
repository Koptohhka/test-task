import { combineReducers } from 'redux';
import pokemonTableReducer from './ducks/pokemon-table';
import pokemonInfoReducer from './ducks/pokemon-info';
import appReducer from './ducks/app';

const rootReducer = combineReducers({
  pokemonTableReducer,
  pokemonInfoReducer,
  appReducer,
});

export default rootReducer;
