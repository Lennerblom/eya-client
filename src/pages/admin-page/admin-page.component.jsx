import React from 'react';
//import { Route } from 'react-router-dom';

import AdminDirectory from '../../new-components/admin-directory/admin-directory.component';

import './admin-page.styles.scss';

const AdminPage = ({ match }) => (
    <div className='admin-page-container'>
      <AdminDirectory />
      {/* <Route exact path={`${match.path}`} component={AdminDirectory}/>
      <Route exact path={`${match.path}/:cardId`} component={CustomCard}/> */}
    </div>
);

export default AdminPage;