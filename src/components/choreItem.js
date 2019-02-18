import React, { Component } from 'react';
import ChoreForm from './choreForm';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/global.scss';


const styles = {
  card: {
    width: 300,
    minWidth: 275,
    height: 300,

  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
};

class ChoreItem extends Component {
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
        let capitalOne = (string) => {
          return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
        }
        const { classes } = this.props;
          return(
            // <a href="/#/details">
            <Card onDoubleClick={this.updateView} className={classes.card}>
            <CardContent>
             <div >{/*//TODO:remove double click and make an admin view that has a update button*/}
             <Typography className={classes.title} color="textPrimary" gutterBottom>
               Chore: <a href="/#/details">{capitalOne(this.props.chore.choreName)}</a>
             </Typography>
             <Typography className={classes.title} color="textPrimary" gutterBottom>
               Assigned To: <a href="/#/details">{capitalOne(this.props.chore.assignedTo)}</a>
             </Typography>
                {/* <li>
                    <h3>Chore</h3>
                    <p>{this.props.chore.choreName}</p>
                </li>
                <li>
                    <h3>Assigned To</h3>
                    <p>{this.props.chore.assignedTo}</p>
                </li> */}
                {this.state.view && <button onClick={this.onRemove}>Delete</button>}
             </div> 
             {this.state.view && <div><ChoreForm onComplete={this.choreUpdate} chore={this.props.chore} viewChange={this.returnView} onClick={this.props.returnView} buttonText = 'save update'/><button onClick={this.returnView}>cancel update</button></div>}
             </CardContent>
            </Card>
            // </a>
            
          );
      }
    }
    ChoreItem.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    
    export default withStyles(styles)(ChoreItem);