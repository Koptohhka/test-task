import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PokemonTable from './pages/pokemon-table/PokemonTable';
import PokemonInfo from './pages/pokemon-info/PokemonInfo';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import './App.scss';

const App = (props) => (
  <div className="app">
    <div className="app__wrapper">
      {props.errorStatus ? <ErrorScreen /> : (
        <>
          <Route exact path="/" component={PokemonTable} />
          <Route path="/:id" component={PokemonInfo} />
          <Redirect to="/" />
        </>
      )}
    </div>
  </div>
);

export default connect((state) => (
  {
    errorStatus: state.appReducer.errorStatus,
  }
))(App);
