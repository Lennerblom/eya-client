import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import Dashboard from './components/dashboard.js';
// import Landing from './components/landing.js';
// import ChoreDetails from './components/choreDetails';
import './App.css';
import '../src/styles/global.scss';

import Header from '../src/new-components/header/header.component';
import HomePage from '../src/pages/homepage/homepage.component';
import AdminPage from '../src/pages/admin-page/admin-page.component';
import ChorePage from '../src/pages/chore-page/chore-page.component';
import CreateChoreForm from '../src/new-components/create-chore/create-chore.component';
import ChoreOverview from '../src/new-components/chore-overview/chore-overvieew.component';
import SignInSignUpPage from './pages/sign-in-sign-up.component/sign-in-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         setCurrentUser({
           id: snapShot.id,
           ...snapShot.data()
         })
       });

    }

    setCurrentUser(userAuth);
  });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {

    return(
      <div>
        <Header />
        <Switch>
          {/* <Route exact path="/home" component={Dashboard}/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/details" component={ChoreDetails}/> */}
          <Route exact path='/' component={HomePage} />
          <Route exact path="/chore" component={ChorePage}/>  
          <Route exact path="/admin" component={AdminPage}/> 
          <Route exact path="/chore-form" component={CreateChoreForm}/>
          <Route exact path="/allchores" component={ChoreOverview}/>  
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage />)}/>     
        </Switch>
      </div>
    );
}
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);