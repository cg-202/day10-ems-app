import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeUpsert } from "./pages/EmployeeUpsert";
import { UserSignIn } from "./pages/UserSignIn";
import { UserSignUp } from "./pages/UserSignUp";
import { AppNav } from "./pages/AppNav";

function App() {
  return (
    <Router>
      <Route exact path="/" component={UserSignIn} />
      <Route exact path="/employee-upsert" component={EmployeeUpsert} />
      <Route exact path="/employee-list" component={EmployeeList} />

      <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
    </Router>
  );
}

export default App;
