import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'



export default function SearchBar() {

    const [term,setterm]=useState('')
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
              
            <input
                type='text'
                id='search'
                placeholder='Search'
                onChange={(e)=>setterm(e.target.value)}

            />
            <button className='go' type='submit'  > ➲ </button>
        </form>
    </div>
  )
}
