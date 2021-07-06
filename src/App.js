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
import { SocialBook } from "./pages/SocialBook";
import { SocialProfile } from "./pages/SocialProfile";
import { TodoList } from "./pages/TodoList";
import { TodoUpsert } from "./pages/TodoUpsert";

function App() {
  const history = useHistory();
  const state = useSelector((state) => state);

  // Will chekck from the storage
  /*if (!state.authSuccess) {
    history.push("/user-signin");
  }*/
  const authSuccessFromStorage = localStorage.getItem("authSuccess");
  if (authSuccessFromStorage !== "1") {
    history.push("/user-signin");
  }

  return (
    <>
      {authSuccessFromStorage === "1" && <AppNav />}

      <Route exact path="/" component={UserSignIn} />

      {/** Social APP */}
      <Route exact path="/social-book" component={SocialBook} />
      <Route exact path="/social-profile" component={SocialProfile} />

      {/** ToDO APP */}
      <Route exact path="/todo-list" component={TodoList} />
      <Route exact path="/todo-upsert" component={TodoUpsert} />

      {/** Demo IN the Class */}
      <Route exact path="/employee-upsert" component={EmployeeUpsert} />
      <Route exact path="/employee-list" component={EmployeeList} />

      <Route exact path="/user-signin" component={UserSignIn} />
      <Route exact path="/user-signup" component={UserSignUp} />
    </>
  );
}

export default App;
