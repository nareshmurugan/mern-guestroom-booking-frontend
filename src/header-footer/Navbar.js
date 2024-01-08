import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookies";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const credVerify = async () => {
      try {
        const token = `Bearer ${Cookies.getItem("Credentials")}`;
        console.log(token);
        const data = (await axios.post("/api/user/verify", { token: token }))
          .data;
        console.log(data);
        if (data.result === "Success") {
          setProfile(true);
        }
      } catch (error) {
        console.log("No Token");
      }
    };
    (async () => await credVerify())();
  }, [location]);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 9999 }}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{ minHeight: "60px" }}
      >
        <div className="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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

            <div className="d-flex">
              {profile ? (
                <Link to="/profile">
                  <CgProfile />
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    className="btn btn-outline-success link-underline-opacity-0"
                    style={{ marginRight: "10px" }}
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
