import { NavLink } from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'


export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
          <NavLink to='/' className='brand' >
            <h1>ψ Kitchen Secreats</h1>
          </NavLink>  
          <SearchBar/>
          <NavLink to='/create' >Create Recipe</NavLink>
        </nav>
    </div>
  )
}
