import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import { v4 as uuidv4 } from 'uuid';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

class ImageGallery extends React.Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImageName = prevProps.imageName;
    const nextImageName = this.props.imageName;

    if (prevImageName !== nextImageName) {
      this.setState({ status: 'pending' });

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
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  // render() {
  //   const { error } = this.state;
  //   return (
  //     <>
  //       <ul className={s.ImageGallery}>
  //         {this.state.images.map(image => (
  //           <ImageGalleryItem
  //             key={image.id}
  //             webformatURL={image.webformatURL}
  //           />
  //         ))}
  //       </ul>
  //       {error && <h1>{error.message}</h1>}
  //       {this.state.images.length !== 0 && <Button />}
  //     </>
  //   );
  // }

  render() {
    const { images, error, status } = this.state;
    // const { imageName } = this.props;

    // // console.log(imageName);
    if (status === 'idle') {
      return <div>Введите имя изображения</div>;
    }

    if (status === 'pending') {
      return (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map(image => (
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
    }
  }
}

export default ImageGallery;
