import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInSignUpPage from './pages/sign-in-sing-up/sign-in-sing-up.component';

import Header from './components/header/header.component';
import { auth } from './firebase/firebase.util';

// Exact means that home page will render only when path is exact match. / is base address, in dev mode it localhost.3000.
// Switch will only match one url at the same time.
class App extends React.Component {
  unsubscribeFromAuth = null

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
