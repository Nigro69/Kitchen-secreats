import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme';
import './Recipe.css'

export default function Recipe() {

  const {id}=useParams();
  const {data, isPending, error}=useFetch('http://localhost:3000/recipes/'+id)
  const {mode}=useTheme()

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <div>
        
        <h2 className='page-title' >{data.title}</h2>
        <p>Takes {data.cookingTime} to cook</p>
        <h5>Ingredients</h5>
        <ul>
          {data.ingredients.map(ing=>(
            <li key={ing} >{ing}</li>
          ))}
        </ul>
        <p className='method'>{data.method}</p>

        
        </div>}
    </div>
  )
}
