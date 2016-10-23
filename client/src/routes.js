//====================
// Import React and the dependencies we need to make react router work
//====================
import React from 'react';
import { Route, IndexRoute } from 'react-router';

//====================
// Import the different components that will represent the different pages
// of our website.
//====================
import AppContainer from './middleware/AppContainer'
import WaitingForPlayers from './components/WaitingForPlayers'
import Game from './components/Game'


export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={WaitingForPlayers}/>
    <Route path='game' component={Game}></Route>
  </Route> 
);