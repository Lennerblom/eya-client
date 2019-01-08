import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            name: '',
            access_level: 'user',
            chore: '',
            email: '',
            phone: '', //or should it be Number??
        };

        const initialState = this.props.user || this.defaultState;
    
        this.state = {...initialState}
      }
    
      onSubmit = (e) => {
          e.preventDefault();
          this.props.onComplete(this.state);
          this.props.viewChange();
          this.setState({...this.defaultState, id: uuid()});
          console.log(this.state);
      };
      onChange = (e) => {
        const val =
        e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
    
      const changedBit = {
        [e.target.name]: val
      };
      this.setState(changedBit);
      }
    render() {
        return (
            <fieldset>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
            <label>Name
              <input name="name" value = {this.state.name}/>
            </label>
            <label>Access Level
              <input name="access_level" value = {this.state.access_level}/>
            </label>
            <label>Chore
              <input name="chore" value = {this.state.chore}/>
            </label>
            <label>Email
              <input name="email" value = {this.state.email}/>
            </label>
            <label>Phone
              <input name="phone" value = {this.state.phone}/>
            </label>
            <button>submit</button>
        </form>
        </fieldset>
        );
    }
}