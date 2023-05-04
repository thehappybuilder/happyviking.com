import { NavLink, Link } from 'react-router-dom';
import legacy from './img/grayLogo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/'>
        <img src={legacy} alt="banner" className="nav-logo"
          height={40}/>
      </Link>
      <menu>
        <li className="nav-btn">
          <NavLink exact to='/' className="nav-link" activeClassName="nav-active">LEGACY</NavLink>
        </li>
        <li className="nav-btn">
          <NavLink to='/HitTheRoad' className="nav-link" activeClassName="nav-active">HIT THE ROAD</NavLink>
        </li>
        <li className="nav-btn">
          <NavLink to='/contact' className="nav-link" activeClassName="nav-active">ABOUT US</NavLink>
        </li>
      </menu>
    </nav>
  );
}

export default Navbar;
