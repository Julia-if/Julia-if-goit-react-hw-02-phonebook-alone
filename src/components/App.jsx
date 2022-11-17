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
    name: '',
    number: '',
    filter: '',
  }
onInputChanger=(e)=>{
this.setState({name:e.target.value})
}
onInputNumberChanger=e=>{
  this.setState({number:e.target.value})
}
onSubmit=(e)=>{
  e.preventDefault();
  this.setState((p)=>p.contacts.push({id:nanoid(), name:p.name, number:p.number}))
  this.resetForm();
}
resetForm =()=>{
  this.setState({name:'', number:''})
}
onInputFilterChanger=(e)=>{
  this.setState({filter:e.target.value})
}
getVisibleContacts=()=>{
  const { filter, contacts}=this.state
  const normalizedFilter= filter.toLowerCase();
  return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
   
 }
  render() {
    const {contacts, filter}=this.state;
    // const filterList = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
   const filterList = this.getVisibleContacts()
    return (<div>
      <h1>Phonebook</h1>
      <form onSubmit={this.onSubmit}>     
          <label htmlFor="name">Name</label>
          <input id="name"  type="text" value={this.state.name}  onChange={this.onInputChanger}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
        <label htmlFor="number">Number</label>
        <input
        value={this.state.number}  onChange={this.onInputNumberChanger}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          <button type="submit">Add contact</button>
        </form>
        <br />
        <Filter value={filter} onChange={this.onInputFilterChanger}/>
         <Contacts contacts={filterList}/>
    </div>
  );
    }}
    const Filter = ({value, onChange})=>{
      return (<label htmlFor="filter"> <input type='text' name="filter" value={value} onChange={onChange}  />
      Find contacts by name</label>)
  }
const Contacts = ({contacts})  =>{return <ul>
      {contacts.map(({name,id, number})=>
      { return <li key={id}>{name}: {number}</li>}     

      )}
      </ul>   
}

