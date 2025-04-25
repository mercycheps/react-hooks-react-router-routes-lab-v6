import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/directors"
          className={({ isActive }) => (isActive ? "active" : "nav-link")}
        >
          Directors
        </NavLink>
        <NavLink
          to="/actors"
          className={({ isActive }) => (isActive ? "active" : "nav-link")}
        >
          Actors
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
