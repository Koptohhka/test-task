import React, { useState } from 'react';
import { connect } from 'react-redux';
import AttackItem from './AttackItem/AttackItem';
import Loader from '../../components/Loader/Loader';
import RefreshButton from '../../components/RefreshButton/RefreshButton';
import './PokemonInfo.scss';

const PokemonInfo = (props) => {
  const [isImageLoaded, setImageLoading] = useState(false);
  const { activePokemonData } = props;

  const onLoadImageHanlder = () => {
    setImageLoading(true);
  };

  const renderPokemonInfo = () => {
    const {
      rarity,
      imageUrlHiRes,
      name,
      subtype,
      supertype,
      hp,
      set,
      attacks,
    } = activePokemonData;
    return (
      <>
        <div className="pokemon-info__button">
          <RefreshButton />
        </div>
        <div className="pokemon-info__container">
          <img
            className="pokemon-info__image"
            onLoad={onLoadImageHanlder}
            src={isImageLoaded ? imageUrlHiRes : require('../../assets/images/pokeball.png')}
            alt={name}
          />
          <div className="pokemon-info__wrapper">
            <div className="pokemon-info__info-container">
              <div className="info-container__flex-wrapper">
                <h3 className="pokemon-info__name">
                  {`${name} (${supertype}-${subtype})`}
                </h3>
                <p className="pokemon-info__hp">
                  <span>hp</span>
                  {' '}
                  {hp}
                </p>
              </div>
              {attacks ? (
                <div className="pokemon-info__attacs">
                  <span>Attacks:</span>
                  {attacks.map((it) => <AttackItem key={it.name} info={it} />)}
                </div>
              ) : null}
              <div className="pokemon-info__stats">
                <p className="pokemon-info__rarity">
                  <span>
                    rarity:
                  </span>
                  {' '}
                  {rarity}
                </p>
                <p className="pokemon-info__set">
                  {`set ${set}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="pokemon-info">
      {activePokemonData ? renderPokemonInfo() : (
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
