import React from 'react';

import s from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    bolt: null,
  };

  // formSubmitHandler = data => {
  //   if (this.state.contacts.find(contact => contact.name === data.name)) {
  //     return alert(`${data.name} is alredy in contacts`);
  //   } else {
  //     data.id = uuidv4();
  //     this.setState(prevState => {
  //       // console.log(prevState.contacts); // будет разный на каждой итерации
  //       // Добавляем в масив новый объект
  //       return { contacts: [...prevState.contacts, data] };
  //     });
  //   }
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={s['SearchForm-input']}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
