import React, { Component, Fragment } from 'react';
import UserForm from './userForm';

export default class UserInst extends Component {

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
          this.props.onRemove(this.props.user);  
        }
      
     userUpdate = (user) => {
      this.props.onComplete(user);
      }
    
      render() {
          return(
            <Fragment>
             <div onDoubleClick={this.updateView}>
                <li>
                    <h3>User</h3>
                    <p>{this.props.user.name}</p>
                </li>
                <li>
                    <h3>Chore</h3>
                    <p>{this.props.user.chore}</p>
                </li>
                {this.state.view && <button onClick={this.onRemove}>Delete</button>}
             </div> 
             {this.state.view && <div><UserForm onComplete={this.userUpdate} user={this.props.user} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
            </Fragment>
          );
      }
    }