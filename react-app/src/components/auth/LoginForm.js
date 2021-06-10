import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import UnAuthNavBar from "../UnAuthNavBar"
import "../styles/loginform.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <UnAuthNavBar />
      <div className="login-form-container-outer">
        <div className="login-form-container-mid">
          <div className="login-form-container-inner">
            <form onSubmit={onLogin} className="login-form">
              <div className="login-form-title">Login</div>
              <div className="login-form-errors">
                {errors.map((error) => (
                  <div>{error}</div>
                  ))}
              </div>
              <div className="login-form-fields-container">
                    <div className="login-form-fields">
                      <div className="login-form-label-containers">
                        <label htmlFor="email">Email: </label>
                      </div>
                      <div className="login-form-inputs-containers">
                        <input
                          className="input-field"
                          name="email"
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={updateEmail}
                          />
                        </div>
                    </div>
                    <div className="login-form-fields">
                      <div className="login-form-label-containers">
                        <label htmlFor="password">Password: </label>
                        </div>
                        <div className="login-form-inputs-containers">
                          <input
                            className="input-field"
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={updatePassword}
                            />
                        </div>
                    </div>
                  </div>
                <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
