import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Searchbar from './components/Searchbar/Searchbar';

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
      </div>
    );
  }
}

export default App;
