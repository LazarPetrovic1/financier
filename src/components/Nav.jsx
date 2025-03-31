import { Link, useLocation }  from "react-router-dom";

function Nav() {
  const { pathname } = useLocation()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Financier
          <span style={{ fontSize: '0.7rem' }}>&nbsp;v{process.env.REACT_APP_VERSION}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/search" ? "active" : ""}`} to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/tracker" ? "active" : ""}`} to="/tracker">Tracker</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/patch-notes" ? "active" : ""}`} to="/patch-notes">Patches</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav