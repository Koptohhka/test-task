import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PokemonTable from './pages/pokemon-table/PokemonTable';
import PokemonInfo from './pages/pokemon-info/PokemonInfo';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="app__wrapper">
      <Route exact path="/pokemon-info" component={PokemonTable} />
      <Route path="/pokemon-info/:id" component={PokemonInfo} />
      <Redirect to="/pokemon-info" />
    </div>
  </div>
);

export default App;
