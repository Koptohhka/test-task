import React from 'react';
import { connect } from 'react-redux';
import AttackItem from './AttacItem';
import Loader from '../../components/Loader';
import './PokemonInfo.scss';

const PokemonInfo = (props) => {
  const { activePokemonData } = props;

  const renderPokemon = () => {
    const {
      rarity,
      imageUrl,
      name,
      subtype,
      supertype,
      hp,
      set,
      attacks,
    } = activePokemonData;
    return (
      <div className="pokemon-info__container">
        <img src={imageUrl} alt={name} />
        <div className="pokemon-info__info-container">
          <div className="info-container__flex-wrapper">
            <h3 className="pokemon-info__name">
              {`${name} (${supertype}-${subtype})`}
            </h3>
            <p className="pokemon-info__hp">
              {`hp ${hp}`}
            </p>
          </div>
          {attacks ? (
            <div className="pokemon-info__attacs">
              {attacks.map((it) => <AttackItem key={it.name} info={it} />)}
            </div>
          ) : null}
          <div className="pokemon-info__stats">
            <p className="pokemon-info__rarity">
              rarity
              {rarity}
            </p>
            <p className="pokemon-info__set">
              set
              {set}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pokemon-info">
      {activePokemonData ? renderPokemon() : (
        <div className="pokemon-info__loader">
          <Loader />
        </div>
      ) }
    </div>
  );
};

export default connect((state) => (
  {
    activePokemonData: state.pokemonInfoReducer.activePokemonData,
  }
))(PokemonInfo);
