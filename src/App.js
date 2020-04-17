import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
// Exact means that home page will render only when path is exact match. / is base address, in dev mode it localhost.3000.
// Switch will only match one url at the same time.
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
