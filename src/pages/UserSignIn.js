export const UserSignIn = () => {
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-50">
        <h1 className="text-center alert alert-info">Application Sign</h1>

        <form>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control form-control-lg mb-2"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg mb-2"
            />
          </div>

          <div>
            <input
              type="button"
              value="SIGN IN"
              className="btn btn-info btn-lg w-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
