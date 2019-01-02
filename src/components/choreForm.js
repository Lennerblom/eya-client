import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class ChoreFprm extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
          choreName: '',
          assignedTo: '',
          choreValue: false,
          dueDateTime: Date.now(),
          status: Number,
          frequency: 0,
          choreStartDate: Date,
          choreEndDate: Date,
        };

        const initialState = this.props.chore || this.defaultState;
    
        this.state = {...initialState}
      }
    
      onSubmit = (e) => {
          e.preventDefault();
          this.props.onComplete(this.state);
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
            <label>Chore/Add Things
            <input name="choreName" value = {this.state.choreName}/>
            </label>
            <label>Assigned To
            <input name="assignedTo" value = {this.state.assignedTo}/>
            <label>Times Per Week
            <input name="frequency" type="number" value = {this.state.frequency}/>
            </label>
            <label>Completed
            <input name="choreValue" value = {this.state.choreValue}/>
            </label>
            </label>
            <button>submit</button>
        </form>
        </fieldset>
        );
    }
}