import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChoreForm from './choreForm';

import {choreAdd} from '../lib/choresReducer';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
              <h1>add dashboard page</h1>
              <ChoreForm onComplete={this.props.choreAdd}/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({ 
    chore: state.chore,
});

const mapDispatchToProps = (dispatch) => ({
    choreAdd: chore => dispatch(choreAdd(chore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);