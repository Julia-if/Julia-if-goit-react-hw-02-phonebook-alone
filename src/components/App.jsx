import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  onSubmit=({name, number})=>{ 
  const {contacts}=this.state;
  (contacts.find(contact=>contact.name.includes(name)))?alert(`${name} is already in your contacts`):
  (this.setState((p)=>(p.contacts.push({id:nanoid(), name:name, number:number}))))
}
onDelete=(contactId)=>{
  this.setState(prevState=>(
    {
      contacts: prevState.contacts.filter(contact=>contact.id!==contactId),
    }
  ))
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
    const {filter}=this.state;
    const filterList = this.getVisibleContacts()
    return (<div>
      <h1>Phonebook</h1>
      <Form onSubmit={this.onSubmit}/>
        <br />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onInputFilterChanger}/>
        <Contacts contacts={filterList} onDelete={this.onDelete}/>
    </div>
  );
    }}
   
