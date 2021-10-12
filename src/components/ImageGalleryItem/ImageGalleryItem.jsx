import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={s['ImageGalleryItem-image']} />
    </li>
  );
}

export default ImageGalleryItem;
