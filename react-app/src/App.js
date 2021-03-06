import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/AuthNavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import Main from "./components/main/Main";
import SinglePoliceDepartment from "./components/singlePD/SinglePoliceDepartment"
import SingleReflection from "./components/SingleReflection";
import Footer from "./components/Footer";
import About from "./components/About"

function App() {
  // const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} >
          <Main />
        </ProtectedRoute>
        <ProtectedRoute path="/pd/:pdId" exact={true} >
          <SinglePoliceDepartment />
        </ProtectedRoute>
        <ProtectedRoute path="/reflection/:reflectionId" exact={true}>
          <SingleReflection />
        </ProtectedRoute>
        <ProtectedRoute path="/about" exact={true}>
          <About />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
