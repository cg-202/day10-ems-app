import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cretaeEmployeeAction } from "../redux/store";

export const EmployeeUpsert = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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
  };

  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Employee Craete</h3>
      </div>

      <form className="mx-4">
        <div>
          <input
            type="text"
            value={firstName}
            onChange={updateFirstName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <input
            type="text"
            value={lastName}
            onChange={updateLastName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            value={userName}
            onChange={updateUserName}
            className="form-control form-control-lg mb-1"
            placeholder="Enter User Name"
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={updatePassword}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <input
            type="text"
            value={email}
            onChange={updateEmail}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <input
            type="text"
            value={mobile}
            onChange={updateMobile}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
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
