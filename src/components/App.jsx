import React, { Component } from "react";

import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: ''
  }
onInputChanger=(e)=>{
this.setState({name:e.target.value})
}
onSubmit=(e)=>{
  e.preventDefault();
  this.setState((p)=>p.contacts.push({id:nanoid(), name:p.name}))

}
  render() {
    
    return (<div>
      <h1>Phonebook</h1>
      <form onSubmit={this.onSubmit}>     
          <label htmlFor="name">Name</label>
          <input id="name"  type="text" value={this.state.name}  onChange={this.onInputChanger}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
        
          <button type="submit">Add contact</button>
        </form>
      
      <ul>
      {this.state.contacts.map(({name,id})=>
      { return <li key={id}>{name}</li>}     

      )}
      </ul>      
    </div>
  );
    }}


