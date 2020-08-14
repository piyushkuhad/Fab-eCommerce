import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Authentication from './pages/authentication/Authentication';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase';

import './App.css';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      //createUserProfileDocument(user);
      //this.setState({currentUser: user})
      //console.log(user);

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
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

          console.log(this.state);

        })
      }

      else {
        this.setState({currentUser: userAuth}) //if user signs out userAuth will be null
      }

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Authentication} />
        </Switch>
      </div> 
    )
  }
}

export default App;
