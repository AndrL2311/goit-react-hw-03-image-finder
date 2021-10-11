import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

// import s from './ImageGallery.module.css';

class ImageGallery extends React.Component {
  state = {
    status: 'idle',
  };

  render() {
    const { status } = this.state;
    const { imageName } = this.props;
    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    // if (status === 'pending') {
    //   return <PokemonPendingView pokemonName={pokemonName} />;
    // }

    // if (status === 'rejected') {
    //   return <PokemonErrorView message={error.message} />;
    // }

    // if (status === 'resolved') {
    //   return <PokemonDataView pokemon={pokemon} />;
    // }
  }
}

export default ImageGallery;
