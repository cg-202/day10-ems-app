import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOutAction } from "../redux/store";

export const AppNav = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    dispatch(signOutAction());

    // redirect the user to login page.
    history.push("/");
  };

  return (
    <div className="bg-dark text-light p-3 d-flex justify-content-end align-items-center">
      <Link to="/employee-list">
        <h6 className="mr-3">EMP-LIST</h6>
      </Link>

      <Link to="/employee-upsert">
        <h6>EMP-UPSERT</h6>
      </Link>

      <h6 className="ml-1" onClick={signOut} role="button">
        Sign out
      </h6>
    </div>
  );
};
