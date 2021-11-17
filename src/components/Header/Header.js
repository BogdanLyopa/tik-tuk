import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <NavLink to="/">Trending</NavLink>
        </nav>
      </div>
    </header>
  );
}
