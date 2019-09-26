import React from 'react';

import './homepage.styles.scss';
import AdminPage from '../admin-page/admin-page.component';
import UserPage from '../userPage/user-page.component';


const HomePage = () => {
    let adminUser = false;  
    return (
    <div className='homepage-container'>
      {/* user directory will auto route to admin or regular user */}
      {adminUser ? 
      <div className='admin-container'>
        <AdminPage />
      </div>
      :
      <div>
        <UserPage />
      </div>
    } 
    
    {/* <button onClick={() => {adminUser = true}}>switch to admin view</button> */}
    </div>
);
}
export default HomePage;