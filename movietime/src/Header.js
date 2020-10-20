import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {Home} from './Home'
import {Genres} from './Genres'
import {Movies} from './Movies'
import {MyList} from './MyList'
import {NavBar} from'./NavBar'
import {SearchBox} from './SearchBox'

const Header = (props) => (
    <BrowserRouter>
  <header>
      
    <div className="container">
      <div className="picture">
          <img  className="image"
             src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg?size=338&ext=jpg "
          />
          </div>
          <NavBar/>
          
         
          <Switch>
         
      {/* <Route path="/" render={() => <Home name="Alexandra" />}/>  */}
      <Route exact={true} path='/' component={Home} />
      {/* numele functiei de react */}
      <Route path="/genres" component={Genres}/>
      {/* propsul de exact spune browserului ca exact componenta asta sa fie aratata pe ecran */}
      <Route path="/movies" component={Movies}/>
      <Route path="/mylist" component={MyList}/>
    
          </Switch>
          <SearchBox/>
     
      
          </div>
</header>
</BrowserRouter>


)
export default Header