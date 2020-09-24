import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import MyRecipes from './pages/MyRecipes';
import ModalAddRecipe from './components/AddRecipe-Modal';
import ModalDirections from './components/Directions-Modal';
import ModalSignIn from './components/SignIn-Modal';
import Provider, {useContext} from './utils/Provider';

function App() {
  const [modalRecipeShow, setModalRecipeShow] = React.useState(false);
  const [modalDirectionsShow, setmodalDirectionsShow] = React.useState(false);
  const [modalSignInShow, setmodalSignInShow] = React.useState(false);
  
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
        onHide={() => setModalRecipeShow(false)}
      />
      <ModalDirections 
        show={modalDirectionsShow}
        onHide={() => setmodalDirectionsShow(false)}
      />
      <ModalSignIn 
        show={modalSignInShow}
        onHide={() => setmodalSignInShow(false)}
      />

  </Provider>

  <Footer />

  </>
)}

export default App;
