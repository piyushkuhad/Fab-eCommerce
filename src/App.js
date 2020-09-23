import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Authentication from './pages/authentication/Authentication';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/header.component';
//import { auth, createUserProfileDocument } from './firebase/firebase';
import { selectCurrentUser } from './redux/user/userSelectors';
//import { setCurrentUser } from './redux/user/userActions';
import { checkUserSession } from './redux/user/userActions';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  const unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();

    //cleanup function(componentwillUnmount)
    return () => unsubscribeFromAuth();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  //setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
