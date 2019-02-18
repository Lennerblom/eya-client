import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChoreForm from './choreForm';
import ChoreItem from './choreItem';
import UserForm from './userForm';
import UserInst from './user';
import Paper from '@material-ui/core/Paper';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import '../styles/global.scss';
import {choreAdd, choreAsyncAdd, choreFetch, choreFetchOne, choreUpdate, choreDelete} from '../lib/choresReducer';
import {userAdd, userAsyncAdd, userFetch, userUpdate, userDelete} from '../lib/userReducer';
//import Grid from '@material-ui/core/Grid';
import ChoreDetails from './choreDetails';

// const styles = theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing.unit,
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   });
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choreView: false,
            userView: false,
            detailsView: false,
            cardsView: true,
        }
      }

      componentDidMount() {
        this.props.choreFetch();
        this.props.userFetch();
        }

        updateView = (e) => {
            console.log('Why', e.target.name);
          if(e.target.name === "chore"){
          this.setState({choreView: true});
          console.log('view:',this.state.choreView);
          } 
          else if(e.target.name === "user"){
            this.setState({userView: true});
            console.log(this.state.userView);
          }
          else if(e.target.name === "details"){
              this.setState({cardsView: false});
              this.setState({detailsView: true});
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
            <div>
              {this.state.choreView && <ChoreForm onComplete={this.props.choreAdd} viewChange={this.returnView}/>}
            </div>
              {/* <div className="cardDiv">
              <Card>
                {/* <a href="/"> */}
                {/* <CardContent> */}
                {this.state.cardsView && <Card item xs={3}>
              {this.props.chore.map((chore)=> <CardContent key={chore.id}>
              <ChoreItem chore={chore} onComplete={this.props.choreUpdate} onRemove={this.props.choreDelete} /></CardContent>)}
              </Card>}
            {/* </CardContent>
            {/* </a> */}
            {/* </Card> */}
            {/* </div> */}
            <Card>
            <CardContent>
            <Button onClick={this.updateView} name="user">Add User</Button>
              {this.state.userView && <UserForm onComplete={this.props.userAdd} viewChange={this.returnView}/>}
              <ul>
              {this.props.user.map((user)=> <li key={user.id}>
              <UserInst user={user} onComplete={this.props.userUpdate} onRemove={this.props.userDelete} /></li>)}
            </ul>
            </CardContent>
            </Card>
            <button name="details" onClick={this.updateView}>details</button>
            {this.state.detailsView && <ChoreDetails name="details"  className="details" loadOneChore={this.props.choreFetchOne}/>}
            </Paper>
            </Fragment>
        );
    }
}
// Dashboard.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

const mapStateToProps = (state) => ({ 
    chore: state.chore,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    choreAdd: chore => dispatch(choreAdd(chore)),
    choreAsyncAdd: chore => dispatch(choreAsyncAdd(chore)),
    choreFetch: chore => dispatch(choreFetch(chore)),
    choreFetchOne: chore => dispatch(choreFetchOne(chore)),
    choreUpdate: chore => dispatch(choreUpdate(chore)),
    choreDelete: chore => dispatch(choreDelete(chore)),

    userAdd: user => dispatch(userAdd(user)),
    userAsyncAdd: user => dispatch(userAsyncAdd(user)),
    userFetch: user => dispatch(userFetch(user)),
    userUpdate: user => dispatch(userUpdate(user)),
    userDelete: user => dispatch(userDelete(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);