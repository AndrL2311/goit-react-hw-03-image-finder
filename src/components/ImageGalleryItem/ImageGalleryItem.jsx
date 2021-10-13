import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, toggleModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={webformatURL} onClick={toggleModal} />
    </li>
  );
}

export default ImageGalleryItem;
