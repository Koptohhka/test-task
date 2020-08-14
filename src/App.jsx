import React from 'react';
import { Route } from 'react-router-dom';
import PokemonTable from './pages/pokemon-table/PokemonTable';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="app__wrapper">
      <Route exact path="/" component={PokemonTable} />
    </div>
  </div>
);

export default App;
