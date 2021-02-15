import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Nav from "../components/nav";

function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
