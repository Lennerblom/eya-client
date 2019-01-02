import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class ChoreFprm extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
          choreName: '',
          assignedTo: '',
          choreValue: Number,
          dueDateTime: Date.now(),
          status: Boolean,
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
            <label>Chore
              <input name="choreName" value = {this.state.choreName}/>
            </label>
            <label>Assigned To
              <input name="assignedTo" value = {this.state.assignedTo}/>
            </label>
            <label>Times Per Week
              <input name="frequency" type="number" value = {this.state.frequency}/>
            </label>
            <label>Status
              <input name="status" value = {this.state.status}/>
            </label>
            <label>Due Date/Time
              <input name="dueDateTime" value = {this.state.dueDateTime}/>
            </label>
            <label>Chore Start Date
              <input name="choreStartDate" value = {this.state.choreStartDate}/>
            </label>
            <label>Chore End Date
              <input name="ChoreEndDate" value = {this.state.ChoreEndDate}/>
            </label>
            <label>Chore Value
              <input name="choreValue" value = {this.state.choreValue}/>
            </label>
            <button>submit</button>
        </form>
        </fieldset>
        );
    }
}