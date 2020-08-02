import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Authentication from './pages/authentication/Authentication';
import Header from './components/header/Header';
import { auth } from './firebase/firebase';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user);
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
