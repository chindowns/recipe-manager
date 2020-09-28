import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import MyRecipes from './pages/MyRecipes';

// import Provider, {useContext} from './utils/Provider';

function App() {
  const [user, setUser] = useState({})

  const loadUser = (arg) => setUser(arg);

  
return (
  <>
  <Header user={user} />

  {/* <Provider> */}
    <Router>
    <Switch>
      <Route exact path="/" component={Home} user={user} />
      <Route exact path="/browse" component={Browse} user={user} />
      <Route exact path="/profile" component={Profile} user={user} loadUser={loadUser} />
      <Route exact path="/my-recipes" component={MyRecipes} user={user} />
    </Switch>
    </Router>

  {/* </Provider> */}

  <Footer user={user} />

  </>
)}

export default App;
