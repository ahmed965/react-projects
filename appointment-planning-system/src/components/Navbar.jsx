import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Telemedicine App
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appointments">
                Appointments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
