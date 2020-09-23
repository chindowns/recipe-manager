import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header'

function App() {
  const [modalShow, setModalShow] = React.useState(fasle);
  

return (
  <>
  <Header />

  <Provider>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/my-recipes" component={MyRecipes} />
    </Switch>

      <ModalAddRecipe 
        show={modalRecipeShow}
        onHide={() => setModalShow(false)}
      />
      <ModalDirections 
        show={modalDirectionsShow}
        onHide={() => setModalShow(false)}
      />
      <ModalSignIn 
        show={modalSignInShow}
        onHide={() => setModalShow(false)}
      />

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
