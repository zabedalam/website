import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Donation from "../pages/donation/Donation";
import Nav from "../components/nav";

function AppRouter() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/donate" component={Donation} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
