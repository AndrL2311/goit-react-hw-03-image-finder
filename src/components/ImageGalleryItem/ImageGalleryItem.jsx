import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, toggleModal }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={webformatURL}
        className={s['ImageGalleryItem-image']}
        onClick={toggleModal}
      />
    </li>
  );
}

export default ImageGalleryItem;
