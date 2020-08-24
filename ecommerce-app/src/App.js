import React from "react";
import NavBar from "./components/navBar";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      {/*+navbar user
      /* <Switch>
        <Route path="/" component={Shop}  />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/admin" user={user} component={Admin} />
        <Route exact path="/">
          <Redirect to="/board" />
        </Route>
      </Switch> */}
    </React.Fragment>
  );
}

export default App;
