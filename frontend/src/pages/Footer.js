import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <nav className="footer">
      <menu>
        <li className="nav-btn">
          <NavLink exact to='/' className="nav-link">LEGACY</NavLink>
        </li>
        <li className="nav-btn">
          <NavLink to='/HitTheRoad' className="nav-link">HIT THE ROAD</NavLink>
        </li>
        <li className="nav-btn">
          <NavLink to='/contact' className="nav-link">ABOUT US</NavLink>
        </li>
      </menu>
    </nav>
  );
}

export default Footer;
