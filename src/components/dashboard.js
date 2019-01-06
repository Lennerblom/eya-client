import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChoreForm from './choreForm';
import ChoreItem from './choreItem';
import UserForm from './userForm';
import UserInst from './user';
import Paper from '@material-ui/core/Paper';

import {choreAdd, choreAsyncAdd, choreFetch, choreUpdate, choreDelete} from '../lib/choresReducer';
import {userAdd, userAsyncAdd, userFetch, userUpdate, userDelete} from '../lib/userReducer';
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choreView: false,
            userView: false,
        }
      }

      componentDidMount() {
        this.props.choreFetch();
        this.props.userFetch();
        }

        updateView = (e) => {
          if(e.target.name === "chore"){
          this.setState({choreView: true});
          } 
          else if(e.target.name === "user"){
            this.setState({userView: true});
          }
      }
    
        returnView = () => {
          this.setState({choreView: false});
          this.setState({userView: false});
          }
    render() {
        return (
            <Fragment>
              <Paper>
              <h1>add dashboard page</h1>
              <button onClick={this.updateView} name="chore">Add Chore</button>
              {this.state.choreView && <ChoreForm onComplete={this.props.choreAdd}/>}
              <ul>
              {this.props.chore.map((chore)=> <li key={chore.id}>
              <ChoreItem chore={chore} onComplete={this.props.choreUpdate} onRemove={this.props.choreDelete} /></li>)}
            </ul>
            <button onClick={this.updateView} name="user">Add User</button>
              {this.state.userView && <UserForm onComplete={this.props.userAdd}/>}
              <ul>
              {this.props.user.map((user)=> <li key={user.id}>
              <UserInst user={user} onComplete={this.props.userUpdate} onRemove={this.props.userDelete} /></li>)}
            </ul>
            </Paper>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ 
    chore: state.chore,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    choreAdd: chore => dispatch(choreAdd(chore)),
    choreAsyncAdd: chore => dispatch(choreAsyncAdd(chore)),
    choreFetch: chore => dispatch(choreFetch(chore)),
    choreUpdate: chore => dispatch(choreUpdate(chore)),
    choreDelete: chore => dispatch(choreDelete(chore)),

    userAdd: user => dispatch(userAdd(user)),
    userAsyncAdd: user => dispatch(userAsyncAdd(user)),
    userFetch: user => dispatch(userFetch(user)),
    userUpdate: user => dispatch(userUpdate(user)),
    userDelete: user => dispatch(userDelete(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);