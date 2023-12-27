import React from "react";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

const Navbar = () => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 9999}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{minHeight:"60px"}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/home" className="navbar-brand">
            DODO
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/room" className="nav-link">
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Amenities
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">
                  About us
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" 
        type="search" 
        placeholder="Hotel Name" 
        aria-label="Search"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form> */}
            <Link to="/login">
              <button
                className="btn btn-outline-success d-flex link-underline-opacity-0"
                style={{ marginRight: "10px" }}
              >
                Login
              </button>
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
