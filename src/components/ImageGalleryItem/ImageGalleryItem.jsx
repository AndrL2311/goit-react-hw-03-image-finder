function ImageGalleryItem({ previewURL }) {
  return (
    <li className="ImageGalleryItem">
      <img src={previewURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
}

export default ImageGalleryItem;
