import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeUpsert } from "./pages/EmployeeUpsert";

function App() {
  return (
    <Router>
      <div className="bg-dark text-light p-3 d-flex justify-content-end ">
        <Link to="/employee-list">
          <h6 className="mr-3">EMP-LIST</h6>
        </Link>

        <Link to="/employee-upsert">
          <h6>EMP-UPSERT</h6>
        </Link>
      </div>

      <Route exact path="/" component={EmployeeList} />
      <Route exact path="/employee-upsert" component={EmployeeUpsert} />
      <Route exact path="/employee-list" component={EmployeeList} />
    </Router>
  );
}

export default App;
