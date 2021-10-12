function fetchImages(imageName, page) {
  return fetch(
    `https://pixabay.com/api/?key=22969928-aad90fecb00099c81964f1030&per_page=12&page=${page}&q=${imageName}&image_type=photo`,
  )
    .then(res => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error('Чтото пошло не так '));
    })
    .then(res => res.hits);
}

export default fetchImages;
