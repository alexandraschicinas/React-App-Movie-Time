import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
 import Home from './Home';
import NavBar from './NavBar';
 import MyList from './MyList';
import MovieType from './MovieType'
import './index.css' 


const App = () => {
  return (
    <BrowserRouter>   
          <NavBar />
    <Switch>
      <Route exact={true} path='/' component={Home} />
      <Route exact path="/movie/:id" component={MovieType}/>
      <Route  exact path="/Mylist" component={MyList}/>
    </Switch>
    </BrowserRouter> 
   );
}

export default App;