import { NavLink } from "react-router-dom";

function Navbar() {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav>
      <NavLink to="/" className={getNavLinkClass}>
        Dashboard
      </NavLink>

      <NavLink to="/profile" className={getNavLinkClass}>
        Profile
      </NavLink>

      <NavLink to="/roadmap" className={getNavLinkClass}>
        Roadmap
      </NavLink>

      <NavLink to="/resume" className={getNavLinkClass}>
        Resume
      </NavLink>

      <NavLink to="/interview-prep" className={getNavLinkClass}>
        Interview Prep
      </NavLink>
    </nav>
  );
}

export default Navbar;