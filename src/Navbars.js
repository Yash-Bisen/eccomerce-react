
import Navbar from "react-bootstrap/Navbar";
import "./App.css"
import { NavLink } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Navbar
                </NavLink>
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
                      <NavLink className="nav-link " to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className=" nav-link" to="/Service">
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink  className=" nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbars;
