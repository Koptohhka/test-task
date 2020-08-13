import React from 'react';
import { Route } from 'react-router-dom';
import PokemonTable from './pages/pokemon-table/PokemonTable';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={PokemonTable} />
    </div>
  );
};

export default App;
