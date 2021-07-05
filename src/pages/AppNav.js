import { Link } from "react-router-dom";

export const AppNav = () => {
  return (
    <div className="bg-dark text-light p-3 d-flex justify-content-end ">
      <Link to="/employee-list">
        <h6 className="mr-3">EMP-LIST</h6>
      </Link>

      <Link to="/employee-upsert">
        <h6>EMP-UPSERT</h6>
      </Link>
    </div>
  );
};
