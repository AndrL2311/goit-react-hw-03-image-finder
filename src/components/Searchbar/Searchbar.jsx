import React from 'react';

import s from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    imageName: '',
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state.imageName);
    // Сбрасываем значение input
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            // autocomplete="off"
            // autofocus
            name="imageName"
            value={this.state.imageName}
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
