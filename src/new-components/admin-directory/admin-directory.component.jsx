import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomCard from '../custom-card/custom-card.component';

import './admin-directory.styles.scss';

const AdminDirectory = () => (
    <div className='admin-directory'>
      <CustomCard
        title='Chores Overview'
        description='click to view all chores'
        linkUrl='/allchores' 
      />
      <CustomCard
        title='Chores Form'
        description='click to add new chore'
        linkUrl='/chore-form' 
      />
    </div>
);

export default withRouter(AdminDirectory);