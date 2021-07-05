import { useRef } from "react";

export const UserSignIn = () => {
  const formEl = useRef();

  const signInUser = (e) => {
    e.preventDefault();

    const isFormValid = formEl.current.checkValidity();
    console.log(isFormValid);

    if (isFormValid) {
      // dispatch the call to redux ::for API CALL
      // TODO
      // ON SUCCESS WILL REDIRECT TO NExT PAGE
    } else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="w-75">
        <h1 className="text-center alert alert-info">Application Sign</h1>

        <form ref={formEl} className="needs-validation" noValidate>
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control form-control-lg mb-2"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control form-control-lg mb-2"
              required
            />
          </div>

          <div>
            <input
              type="button"
              value="SIGN IN"
              onClick={signInUser}
              className="btn btn-info btn-lg w-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
