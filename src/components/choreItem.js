import React, { Component, Fragment } from 'react';
import ChoreForm from './choreForm';

export default class ChoreItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          view: false,
        }
      }
    
      updateView = () => {
        this.setState({view: true});
      }
      returnView = () => {
        this.setState({view: false});
      }
      onRemove = () => {
          this.props.onRemove(this.props.chore);  
    
        }
      
     choreUpdate = (chore) => {
      this.props.onComplete(chore);
    
      }
    
      render() {
          return(
            <Fragment>
             <div onDoubleClick={this.updateView}>
                <li>
                    <h3>Chore</h3>
                    <p>{this.props.chore.choreName}</p>
                </li>
                <li>
                    <h3>Assigned To</h3>
                    <p>{this.props.chore.assignedTo}</p>
                </li>
                {this.state.view && <button onClick={this.onRemove}>Delete</button>}
             </div> 
             {this.state.view && <div><ChoreForm onComplete={this.choreUpdate} chore={this.props.chore} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
            </Fragment>
          );
      }
    }