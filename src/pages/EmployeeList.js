import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteEmployeeAction,
  getAllEmployeeAction,
  updateRenderAction,
} from "../redux/EmployeeReducer";
import { AppNav } from "./AppNav";

export const EmployeeList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllEmployeeAction());
  }, []);

  const deleteRecord = (item) => {
    console.log("DELETE RECORD", item.id);
    // dispatch the call.
    dispatch(deleteEmployeeAction(item));
  };

  // 2
  const updateRecord = (item) => {
    console.log("Update Record", item);

    // 3 :: updating the store
    dispatch(updateRenderAction(item));

    // navigateing to the page
    history.push("/employee-upsert");
  };

  return (
    <div>
      <div className="alert alert-secondary mb-0">
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.employee.employeeList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.userName}</td>
              <td>{"*****"}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-outline-secondary btn-sm  mr-1"
                  // onClick={updateRecord} :1
                  onClick={() => updateRecord(item)}
                />
                <input
                  type="button"
                  value="Delete"
                  // onClick={deleteRecord}
                  onClick={() => deleteRecord(item)}
                  className="btn btn-outline-danger btn-sm"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
