import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


return (
  <>
  <header>
    <h1 className="red">Recipe Organizer</h1>
    <Nav/>
    <Profile/>
  </header>

  <Provider>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/my-recipes" component={MyRecipes} />
    </Switch>

    <ModalAddRecipe />
    <ModalDirections />
    <ModalSignIn />

  </Provider>

  <footer>
    @copyright
    terms
    privacy
    feedback
  </footer>
  </>
)}

export default App;
