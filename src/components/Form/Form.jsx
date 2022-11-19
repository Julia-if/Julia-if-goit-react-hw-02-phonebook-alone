import React, { Component } from "react";

export class Form extends Component {
state ={
    name: '',
    number: '',
}
onInputChanger=(e)=>{
    this.setState({name:e.target.value})
    }
    onInputNumberChanger=e=>{
      this.setState({number:e.target.value})
    }
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm()
    }
    resetForm =()=>{
      this.setState({name:'', number:''})
    }
    render() {
       
        return (<div>
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
      required/>
              <button type="submit">Add contact</button>
            </form> </div>)
}}