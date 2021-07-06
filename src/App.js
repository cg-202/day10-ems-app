import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { EmployeeList } from "./pages/EmployeeList";
import { EmployeeUpsert } from "./pages/EmployeeUpsert";
import { UserSignIn } from "./pages/UserSignIn";
import { UserSignUp } from "./pages/UserSignUp";
import { AppNav } from "./pages/AppNav";
import { useSelector } from "react-redux";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  if (!state.authSuccess) {
    history.push("/user-signin");
  }

  return (
    <>
      <Route exact path="/" component={UserSignIn} />
      <Route exact path="/employee-upsert" component={EmployeeUpsert} />
      <Route exact path="/employee-list" component={EmployeeList} />

      <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
    </>
  );
}

export default App;
