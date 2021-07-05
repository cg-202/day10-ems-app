import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeEmployeeAction } from "../redux/store";

export const EmployeeUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const formEl = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);

  const addNewEmployee = () => {
    // WRITE LOGIC FOR THE VALIDATION :: FORM_ELEMENT / FORM_TAG
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());

    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        cretaeEmployeeAction({
          firstName,
          lastName,
          userName,
          password,
          email,
          mobile,
        })
      );

      // clear the form
      setFirstName("");
      setLastName("");
      setUserName("");
      setPassword("");
      setEmail("");
      setMobile("");
    } else {
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Employee Craete</h3>
      </div>

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={updateFirstName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter First Name"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={lastName}
            onChange={updateLastName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Last Name"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={userName}
            onChange={updateUserName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter User Name"
            required
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={updatePassword}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Password"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={email}
            onChange={updateEmail}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
            required
          />
        </div>

        <div>
          <input
            type="text"
            value={mobile}
            onChange={updateMobile}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
            required
          />
        </div>

        <div>
          <input
            type="button"
            onClick={addNewEmployee}
            value="Add Employee"
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>
    </div>
  );
};
