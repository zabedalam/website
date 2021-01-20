import { Router, RouteComponentProps } from "@reach/router";

// Custom Components
import Home from "../pages/home";
import Signup from "../pages/signup";
import Login from "../pages/login";

function AppRouter() {
  return (
    <Router>
      <RouterPage path="/" pageComponent={<Home />} />
      <RouterPage path="/signup" pageComponent={<Signup />} />
      <RouterPage path="/login" pageComponent={<Login />} />
    </Router>
  );
}

export default AppRouter;

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
