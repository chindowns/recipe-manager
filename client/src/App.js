import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase, {getUser} from './utils/Firebase'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import MyRecipes from './pages/MyRecipes';
import CheckEmail from './pages/CheckEmail'

// import Provider, {useContext} from './utils/Provider';

function App() {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if (loading) {
     setUser(getUser());
     setLoading(false);
    }
  },[loading])

  console.log(loading);

  const onClose = () => {
    console.log("closing window");
    window.opener = null;
    window.open('', '_self');
    window.close();
  }

return (
  <div id="page-container">

  {/* <Provider> */}
    <Router>
      <Header user={user} onClose={onClose} />

    <Switch>
      <Route exact path="/" component={Home} user={user} />
      <Route exact path="/browse" component={Browse} user={user} />
      <Route exact path="/profile" component={Profile} user={user} />
      <Route exact path="/my-recipes" component={MyRecipes} user={user} />
      <Route expact path="/checkEmail" component={CheckEmail} />
    </Switch>
      <Footer user={user} />
    </Router>

  {/* </Provider> */}


  </div>
)}

export default App;
