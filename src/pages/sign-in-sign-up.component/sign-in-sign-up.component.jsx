import React from 'react';

import './sign-in-sign-up.styles.scss';
import SignIn from '../../new-components/sign-in/sign-in.component';
import SignUp from '../../new-components/sign-up/sign-up.component';

const SignInSignUpPage = () => (
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
      
);

export default SignInSignUpPage;