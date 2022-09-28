import React from "react";

const Signup = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger me-2"
        data-bs-toggle="modal"
        data-bs-target="#signupModal"
      >
        <i className="fa fa-user-plus me-1"></i>
        Register
      </button>

      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-outline-danger w-100 mb-2">
                <i className="fa fa-google-plus me-2"></i>
                Sign up with Google
              </button>
              <button className="btn btn-outline-primary w-100 mb-2">
                <i className="fa fa-facebook me-2"></i>
                Sign up with Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail2" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword2" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck2">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-info w-100 text-dark mt-3"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
