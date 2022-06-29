import './Recipe.css'

// import RecipeList from '../../components/recipeList/RecipeList'
import {useFetch} from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'



export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data : recipe, isPending, error} = useFetch(url)

  return (
    <div className = "recipe">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h1 className='page-title'>{recipe.title}</h1>
          <p>{recipe.cookingTime}</p>

          <ul>
              {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}
 