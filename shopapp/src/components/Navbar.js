function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">Sign up</button>

              <button className="button is-light">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
