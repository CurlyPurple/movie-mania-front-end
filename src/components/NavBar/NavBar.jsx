// npm modules
import { NavLink } from 'react-router-dom'

// assets
import Icon from '../../assets/Logo.png'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <nav className={styles.container}>
      <h1 className={styles.header}>Movie Mania <img className={styles.logo} src={Icon} alt="Movie Mania Logo" /></h1>
      {user ?
        <ul>
          <li><NavLink to="/movieCons">MovieCons</NavLink></li>
          <li><NavLink to="/dashboard">{user.name}'s Dashboard</NavLink></li>
          {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/movieCons">MovieCons</NavLink></li>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
    </>
  )
}

export default NavBar
