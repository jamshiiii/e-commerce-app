import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light nav-inverse navbar-fixed-top">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold fs-5">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold fs-5">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item fw-bold fs-5">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item fw-bold fs-5">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <form className="d-flex mx-auto" role="search">
              <Link className="navbar-brand  fw-bold" to="/">
                E-MART
              </Link>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Signup />
            <Login />
            <Link to="/cartBtn" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>
              Cart ({state.length})
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
