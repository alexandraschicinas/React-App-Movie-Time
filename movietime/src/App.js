import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { Movies } from "./Movies";
import { MyList } from "./MyList";
import NavBar from "./NavBar";
import "./index.css";

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        {/* numele functiei de react */}
        {/* propsul de exact spune browserului ca exact componenta asta sa fie aratata pe ecran */}
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </BrowserRouter>
  );
};
=======
     <div>
     <Header/>
   <Content/>
  <Footer/>
  </div>
   );
}
>>>>>>> bba86dce25b50926dcd6a8a0492d94e97fb5b721

export default App;
