import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './RecipeList.css'

export default function RecipeList({recipes}) {

  const {mode}=useTheme()

  if(recipes.length===0){
    return <div className='error'>No Recipe Found!</div>
  }

 

  return (
    <div className={`recipe-list ${mode}`} >
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`} >
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make</p>
                <p>{recipe.method.substring(0,100)}...</p>
                <Link to={`/recipe/${recipe.id}`} >Cook This</Link>
            </div>
        ))}
    </div>
  )
}
