import { NavLink, Link } from 'react-router-dom';
import HVLogo from './img/HVLogo.js';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/' className="nav-logo"><HVLogo /></Link>
      <menu>
        <li className="nav-btn"><NavLink to='/contact' className="nav-link" activeClassName="nav-active">CONTACT</NavLink></li>
        <li className="nav-btn"><NavLink to='/discord' className="nav-link" activeClassName="nav-active">DISCORD</NavLink></li>
        <li className="nav-btn"><NavLink exact to='/' className="nav-link" activeClassName="nav-active">GAMES</NavLink></li>
      </menu>
    </nav>
  );
}

export default Navbar;
