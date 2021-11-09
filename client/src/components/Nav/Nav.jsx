import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div className='nav'>
        <NavLink className='logo' to='/'>Pasta Pizza People</NavLink>
        <div>
          <NavLink className='link' to='/add-posts'>Make a Post</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav