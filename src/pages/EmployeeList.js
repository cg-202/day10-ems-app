import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployeeAction } from "../redux/store";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, []);

  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Employee List</h3>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {state.employeeList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.userName}</td>
              <td>{"*****"}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
