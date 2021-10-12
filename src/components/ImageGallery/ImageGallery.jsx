import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

class ImageGallery extends React.Component {
  state = {
    images: [],
    page: 2,
    status: 'idle',
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;

    if (prevImageName !== nextImageName) {
      console.log('Изменилось');
      fetch(
        `https://pixabay.com/api/?key=22969928-aad90fecb00099c81964f1030&per_page=12&page=${this.state.page}&q=${nextImageName}&image_type=photo`,
      )
        .then(res => {
          console.log(res);
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(new Error('Чтото пошло не так '));
        })
        .then(res => res.hits)
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <ul className={s.ImageGallery}>
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
            />
          ))}
        </ul>
        {error && <h1>{error.message}</h1>}
        {this.state.images.length !== 0 && <Button />}
      </>
    );

    // const { status } = this.state;
    // const { imageName } = this.props;
    // // console.log(imageName);
    // if (status === 'idle') {
    //   return <div>Введите имя изображения.
    //     <p>{imageName}</p>
    //   </div>;
    // }

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
