import './Create.css'
import { useRef, useState, useEffect} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

export default function Create() {

  const [recipeTitle,setrecipeTitle]=useState('')
  const [method, setmethod] = useState('')
  const [cookingTime, setcookingTime] = useState('')
  const [ingredients, setingredients] = useState([])
  const [newingredients, setnewingredients] = useState('')
  const ingInput=useRef(null)
  const navigate=useNavigate()
  const {mode}=useTheme()

  const {postData,data}=useFetch('http://localhost:3000/recipes','POST')

  const handleSubmit=(e)=>{
    e.preventDefault()
    const title=recipeTitle
    postData({title, ingredients, method, cookingTime:cookingTime + ' minutes'})
  }

  useEffect(() => {
    if(data){
        return navigate('/')
    }
  
   
  }, [data,navigate])
  

  const handleAdd=(e)=>{
    e.preventDefault()
    const ing=newingredients.trim()
    
    if(ing && !ingredients.includes(ing)){
      setingredients(preving=>[...preving,ing])
    }
    setnewingredients('')
    ingInput.current.focus()

  }

  return (
    <div className={`create ${mode}`}>

     <h1 className='page-title'>♨ Add New Recipe</h1>

     <form onSubmit={handleSubmit} >

      <label>
        <span>
          Recipe Title:
        </span>
        <input
          type='text'
          onChange={(e)=>setrecipeTitle(e.target.value)}
          value={recipeTitle}
        />
      </label>

      <label>
      <span>Ingredients: </span>
      <div className='ingredients'>
      <input 
        type='text'
        onChange={(e)=>setnewingredients(e.target.value)}
        value={newingredients}
        ref={ingInput}
      />
      <button onClick={handleAdd} >Add</button>
      </div>
      </label>
      <div className='showingIng'>
        Listed Ingredients: 
          <ul>
          {ingredients.map(e=> <li key={e} >{e}</li>)}
          </ul>  
        
      </div>

      <label>
        <span>
          Method:
        </span>
        <textarea
          rows="10" cols="10"
          onChange={(e)=>setmethod(e.target.value)}
          value={method}
          required
        />
      </label>

      <label>
        <span>
          cooking Time (in Minutes):
        </span>
        <input
          type='number'
          onChange={(e)=>setcookingTime(e.target.value)}
          value={cookingTime}
        />
      </label>

      <button className='btn' >Submit</button>

     </form>
    </div>
  )
}
