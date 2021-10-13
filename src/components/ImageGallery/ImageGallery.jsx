import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import { v4 as uuidv4 } from 'uuid';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import fetchImages from '../../services/images-api';

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
      this.setState({ status: 'pending', page: 1 });

      fetchImages(nextImageName, this.state.page)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

      fetchImages(nextImageName, this.state.page)
        .then(images =>
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...images],
              status: 'resolved',
            };
          }),
        )
        .then(() => {
          return window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, error, status } = this.state;
    // const { imageName } = this.props;

    // // console.log(imageName);
    if (status === 'idle') {
      return <div>Введите имя изображения</div>;
    }

    if (status === 'pending') {
      return (
        <div>
          {
            <Loader
              type="Rings"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          }
          Загружаем...
        </div>
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
                toggleModal={this.props.toggleModal}
              />
            ))}
          </ul>
          {error && <h1>{error.message}</h1>}
          {this.state.images.length !== 0 && (
            <Button onLoadMore={this.onLoadMore} />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
