import React, {useState, useEffect} from 'react';
import RecipeCard from '../components/Recipe-Cards';
import axios from 'axios';
import firebase from '../utils/Firebase'


export default () => {

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [user, setUser] = useState(null);

    function getUser() {
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function (fbuser) {
        if (fbuser) {
          axios.get(`/api/user/${fbuser.email}`)
            .then(response => {
              setUser(response.data);
            })
            .catch(error => console.log(error));
        }
      });
        // [END authstatelistener]
    }

    function getRecipes() {
        axios.get('api/recipe/')
          .then(result => setRecipes(result.data))
          .catch(err => console.log('Error:' + err))
    }

    function submitSearch(e) {
        e.preventDefault();
        axios.get("api/recipe/search/"+search)
            .then(result => {
                if (result.data.length > 0) {
                    setRecipes(result.data);
                }})
            .catch(err => console.log(`Error: ${err}`))
    }

    useEffect(() => {
        if(recipes.length < 1){
            getRecipes();
        }

        if(!user){
            getUser();
        }
       },[recipes.length, user])

    console.log(recipes);
    
    return (
      <div id="browseRecipes" >
        <div className="form">
            <form onSubmit={submitSearch}>
                <input 
                    id="search" 
                    className="background-green-semitransparent" 
                    type="text"
                    name="search"
                    placeholder="Search Recipes"
                    onClick={e => setSearch(e.target.value)}
                />
            </form>
        </div>
        <div className="flex-container">
            {recipes.map(recipe => (
                <RecipeCard recipe={recipe} user={user} key={recipe.id} />
            ))}
        </div>
      </div>  
    )
}