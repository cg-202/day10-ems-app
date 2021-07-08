import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeEmployeeAction } from "../redux/EmployeeReducer";
import { AppNav } from "./AppNav";

export const EmployeeUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const formEl = useRef();

  const [firstName, setFirstName] = useState(state.employee.uref.firstName);
  const [lastName, setLastName] = useState(state.employee.uref.lastName);
  const [userName, setUserName] = useState(state.employee.uref.userName);
  const [password, setPassword] = useState(state.employee.uref.password);
  const [email, setEmail] = useState(state.employee.uref.email);
  const [mobile, setMobile] = useState(state.employee.uref.mobile);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => {
    console.log(e.target.value);

    // replacing all the non-digit ^\d with empty string.
    const numericValue = e.target.value.replace(/[^\d]/gi, "");
    setMobile(numericValue);
  };

  const addNewEmployee = (e) => {
    // WRITE LOGIC FOR THE VALIDATION :: FORM_ELEMENT / FORM_TAG
    // console.log(formEl.current);
    // console.log(formEl.current.checkValidity());
    e.preventDefault();

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
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
  };

  return (
    <div>
      <div className="alert alert-secondary">
        {state.employee.uref.id ? (
          <h5>Employee Update</h5>
        ) : (
          <h5>Employee Create</h5>
        )}
      </div>

      {state.employee.progress && (
        <div className="mx-4 alert alert-success">
          Employee Creation Success
        </div>
      )}

      <form ref={formEl} className="mx-4 needs-validation" noValidate>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={updateFirstName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter First Name"
            minLength="3"
            maxLength="30"
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
            minLength="3"
            maxLength="30"
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
            minLength="3"
            maxLength="30"
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
            minLength="6"
            maxLength="30"
            required
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={updateEmail}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
            minLength="6"
            maxLength="30"
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
            minLength="10"
            maxLength="10"
            required
          />
        </div>

        <div>
          {state.employee.uref.id ? (
            <input
              type="button"
              // onClick={addNewEmployee}
              value="Update Employee"
              className="btn btn-lg btn-secondary w-100"
            />
          ) : (
            <input
              type="button"
              onClick={addNewEmployee}
              value="Add Employee"
              className="btn btn-lg btn-secondary w-100"
            />
          )}
        </div>
      </form>
    </div>
  );
};
