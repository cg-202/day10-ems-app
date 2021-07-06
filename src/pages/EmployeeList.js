import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployeeAction, getAllEmployeeAction } from "../redux/store";
import { AppNav } from "./AppNav";

export const EmployeeList = () => {
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

  return (
    <div>
      <AppNav />

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
          {state.employeeList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.userName}</td>
              <td>{"*****"}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
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
