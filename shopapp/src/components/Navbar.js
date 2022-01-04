import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="buttons">
            <button className="button is-primary is-inverted">
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">
                <Link to="/Signup">Sign up</Link>
              </button>

              <button className="button is-light">
                <Link to="/Login">Log in</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
