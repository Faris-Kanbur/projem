import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";

function AppRouter() {
  console.log(process.env);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;