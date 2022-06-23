import { NavLink } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
  const getLinkStyle = ({ isActive }) => (isActive ? 'navSelected' : null );

  // View ----------------------------------------
  return (
    <nav className="Navbar">
      <div className="navItem">
        <NavLink to='/' className={getLinkStyle}>My Modules</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/assessments' className={getLinkStyle}>Add Module</NavLink>
      </div>
    </nav>
  )
}
