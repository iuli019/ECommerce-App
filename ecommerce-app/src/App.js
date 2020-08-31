import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Shop from "./components/shop";
import { Provider } from "react-redux";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import configureStore from "./store/configureStore"
import "./App.css";
import ProductPage from "./components/productPage";
import Cart from "./components/cart";
import NotFound from "./components/notFound";
import Admin from "./components/admin";
import JwtDecode from 'jwt-decode';
import { ToastContainer } from "react-toastify";


const store = configureStore();

function App() {

  const [user, setUser] = useState();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      console.log(jwt);
      const user = JwtDecode(jwt);
      console.log(user);
      if (user.isAdmin) setAdmin(true);
      console.log(admin);
      setUser(user);
    } catch (ex) { }
  }, [admin]);



  return (

    <React.Fragment>
      <ToastContainer />
      <Provider store={store}>
        <NavBar user={user} admin={admin} />
        <main>
          <Switch>
            <Route path='/product/:id' component={ProductPage} />
            <Route path="/products" component={Shop} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path='/cart' component={Cart} />
            <ProtectedRoute path="/admin" component={Admin} />
            <Redirect from='/' exact to="/products" />
            <Redirect to="/not-found" />

          </Switch>
        </main>
      </Provider>
    </React.Fragment>
  );
}

export default App;
