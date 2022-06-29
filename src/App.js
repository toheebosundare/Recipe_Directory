import { BrowserRouter, Route, Switch } from 'react-router-dom';
// component
// import RecipeList from './components/recipeList/RecipeList';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

// styles
import './App.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/recipes/:id">
            <Recipe/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/create">
          <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;