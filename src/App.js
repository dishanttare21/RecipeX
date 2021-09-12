import './App.css';
import React, { useState, useEffect } from 'react';
import Recipe from './components/Recipe';

function App() {
  const API_ID = '6ed157de';
  const API_KEY = 'f70b8c870c11ed5e35389955d93fa312';

  const [recipes, setRecipes] = useState([]);
  const [search, setsearch] = useState('');
  const [query, setQuery] = useState('salad');

  useEffect(() => {
    getRecipies();
  }, [query])

  const getRecipies = async () => {
    const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + API_ID + '&app_key=' + API_KEY);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e,) => {
    setsearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setsearch('');
  }

  return (
    <div className="App">
      <nav className="navbar">
      <form onSubmit={getSearch} className="search-form" >
        <input 
        className="search-bar" 
        type="text" 
        value={search} 
        onChange={updateSearch} 
        placeholder="Enter Recipe Name"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      </nav>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            // key ={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
