import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Shop from "./components/shop";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore"
import "./App.css";


const store = configureStore();

function App() {
  return (

    <React.Fragment>
      <Provider store={store}>
        <NavBar />
        <Switch>
          <Route path="/" component={Shop} />

          {/* <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/admin" component={Admin} /> */}

        </Switch>
      </Provider>
    </React.Fragment>
  );
}

export default App;
