import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
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
    return <div className={s.container}></div>;
  }
}

export default App;
