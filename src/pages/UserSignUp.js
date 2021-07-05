import { Link } from "react-router-dom";

export const UserSignUp = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50">
        <h2 className="text-center alert alert-info">
          Application Signup Here
        </h2>

        <form>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control form-control-lg mb-1"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg mb-1"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control form-control-lg mb-1"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter Mobile"
              className="form-control form-control-lg mb-1"
            />
          </div>

          <div>
            <input
              type="button"
              value="Register Here"
              className="btn btn-info btn-lg w-100"
            />
          </div>

          <div>
            <Link to="/user-signin">
              <input
                type="button"
                value="Signin Here"
                className="btn btn-link w-100"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
