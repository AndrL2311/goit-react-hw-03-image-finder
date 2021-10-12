import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ previewURL }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={previewURL} alt="" className={s['ImageGalleryItem-image']} />
    </li>
  );
}

export default ImageGalleryItem;
