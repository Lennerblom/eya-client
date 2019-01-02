import React, { Component, Fragment } from 'react';
import ChoreForm from './choreForm';
export default class Dashboard extends Component {
    render() {
        return (
            <Fragment>
              <h1>add dashboard page</h1>
              <ChoreForm/>
            </Fragment>
        );
    }
}