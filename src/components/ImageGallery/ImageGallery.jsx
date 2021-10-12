import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

// import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends React.Component {
  state = {
    images: [],
    page: 2,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.imageName;
    const nextImage = this.props.imageName;

    if (prevImage !== nextImage) {
      console.log('Изменилось');
      fetch(
        `https://pixabay.com/api/?key=22969928-aad90fecb00099c81964f1030&per_page=12&page=${this.state.page}&q=${nextImage}&image_type=photo`,
      )
        .then(res => res.json())
        .then(res => res.hits)
        .then(images => this.setState({ images }));
    }
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.images.map(image => (
          <ImageGalleryItem key={image.id} previewURL={image.previewURL} />
        ))}
      </ul>
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
