import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="left-nav">
        <h1 className="main-heading">Bookstore CMS</h1>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </div>
      <div className="right-nav">
        <img
          className="user-profile"
          src="https://cdn.vectorstock.com/i/preview-1x/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg"
          alt="user-profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
