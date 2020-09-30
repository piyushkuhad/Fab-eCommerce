import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//import Homepage from './pages/homepage/Homepage';
//import ShopPage from './pages/shoppage/ShopPage';
//import Authentication from './pages/authentication/Authentication';
//import Checkout from './pages/checkout/Checkout';
import Header from './components/header/header.component';
import Spinner from './components/spinner/Spinner.component';
//import { auth, createUserProfileDocument } from './firebase/firebase';
import { selectCurrentUser } from './redux/user/userSelectors';
//import { setCurrentUser } from './redux/user/userActions';
import { checkUserSession } from './redux/user/userActions';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.component';

import { GlobalStyle } from './global.styles';

//Lazy Loading using Dynamic Imports
const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shoppage/ShopPage'));
const Authentication = lazy(() =>
  import('./pages/authentication/Authentication')
);
const Checkout = lazy(() => import('./pages/checkout/Checkout'));

const App = ({ checkUserSession, currentUser }) => {
  const unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();

    //cleanup function(componentwillUnmount)
    return () => unsubscribeFromAuth();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          {/* Suspense Helps in loading Asynchronous Components */}
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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
