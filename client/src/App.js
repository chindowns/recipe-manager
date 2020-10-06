import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase, {getUser} from './utils/Firebase'
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import MyRecipes from './pages/MyRecipes';
import CheckEmail from './pages/CheckEmail';


function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    if (!user) {
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function (fbuser) {
        if (fbuser) {
          var email = fbuser.email;
          var emailVerified = fbuser.emailVerified;
          var uid = fbuser.uid;
            axios.get(`/api/user/${fbuser.email}`)
              .then(response => setUser(response.data))
              .catch(error => console.log(error));
        }
      });
   // [END authstatelistener]
    }
  },[user])

return (
  <div id="page-container">

    <Router>
      <Header user={user} />

    <Switch>
      <Route exact path="/" component={Home} user={user} />
      <Route exact path="/browse" component={Browse} user={user} />
      <Route exact path="/profile" component={Profile} user={user} />
      <Route exact path="/my-recipes" component={MyRecipes} user={user} />
      <Route expact path="/checkEmail" component={CheckEmail} />
    </Switch>
      <Footer user={user} />
    </Router>

  </div>
)}

export default App;
