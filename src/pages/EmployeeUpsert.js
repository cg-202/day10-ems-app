export const EmployeeUpsert = () => {
  return (
    <div>
      <div className="alert alert-secondary">
        <h3>Employee Craete</h3>
      </div>

      <form className="mx-4">
        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter First Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Last Name"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter User Name"
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg mb-1"
            placeholder="Enter Mobile"
          />
        </div>

        <div>
          <input
            type="button"
            value="Add Employee"
            className="btn btn-lg btn-secondary w-100"
          />
        </div>
      </form>
    </div>
  );
};
