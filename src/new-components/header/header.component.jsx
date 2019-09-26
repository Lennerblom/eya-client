import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selector';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
      <LogoContainer to='/'>
          HOME
      </LogoContainer>
      <OptionsContainer>
          <OptionLink to='/shop'>
              SHOP
          </OptionLink>
          <OptionLink to='/shop'>
              CONTACT
          </OptionLink>
        { currentUser 
          ? 
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
      </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
});

export default connect(mapStateToProps)(Header);