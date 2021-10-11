import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends React.Component {
  state = {
    imageName: '',
  };

  formSubmitHandler = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} theme={'colored'} />
      </div>
    );
  }
}

export default App;
