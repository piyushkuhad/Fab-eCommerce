import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Authentication from './pages/authentication/Authentication';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { selectCurrentUser } from './redux/user/userSelectors';
import { setCurrentUser } from './redux/user/userActions';

import './App.css';

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser : null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      //createUserProfileDocument(user);
      //this.setState({currentUser: user})
      //console.log(user);

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          /*
          //console.log(snapshot.data());
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }
          // , () => {
          //   console.log(this.state);
          // }
          )
          */
          //Using Redux
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
        
      }

      else {
        //this.setState({currentUser: userAuth}) //if user signs out userAuth will be null
        
        //Using Redux
        setCurrentUser(userAuth) 
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route 
            exact path="/auth"  
            render={
              () => this.props.currentUser ? (<Redirect to="/" />) : (<Authentication />)
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div> 
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
