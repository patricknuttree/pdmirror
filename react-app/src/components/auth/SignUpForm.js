import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import UnAuthNavBar from "../UnAuthNavBar";
import "../styles/signupform.css"

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pd_rep, setPd_rep] = useState("")
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, pd_rep, password));
      if (data.errors) {
        setErrors(data.errors)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePd_rep = (e) => {
    setPd_rep(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <UnAuthNavBar />
      <div className="signup-form-container-outer">
        <div className="signup-form-container-mid">
          <div className="signup-form-container-inner">
            <form onSubmit={onSignUp} className="signup-form">
              <div className="signup-form-title">Sign Up</div>
              <div className="signup-form-errors">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                  ))}
              </div>
              <div className="signup-form-fields-container">
                <div className="signup-form-fields">
                <div className="signup-form-label-containers">
                  <label>User Name:</label>
                </div>
                <div className="signup-form-inputs-containers">
                <input
                  className="input-field"
                  type="text"
                  name="username"
                  onChange={updateUsername}
                  value={username}
                  ></input>
                  </div>
                  </div> 
              <div className="signup-form-fields">
              <div className="signup-form-label-containers">
                <label>Email:</label>
              </div>
              <div className="login-form-inputs-containers">
                <input
                  className="input-field"
                  type="text"
                  name="email"
                  onChange={updateEmail}
                  value={email}
                  ></input>
                </div>
              </div >
              <div className="signup-form-fields">
              <div className="signup-form-label-containers">
                <label>Police Department Rep.:</label>
              </div>
              <div className="login-form-inputs-containers">
                  <select value={pd_rep} onChange={updatePd_rep}>
                    <option value=""></option>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                </div>
              </div>
              <div className="signup-form-fields">
              <div className="signup-form-label-containers">
                <label>Password:</label>
              </div>
              <div className="login-form-inputs-containers">
                <input
                  className="input-field"
                  type="password"
                  name="password"
                  onChange={updatePassword}
                  value={password}
                  ></input>
                </div>
              </div>
              <div className="signup-form-fields">
              <div className="signup-form-label-containers">
                <label>Repeat Password:</label>
              </div>
              <div className="login-form-inputs-containers">
                <input
                  className="input-field"
                  type="password"
                  name="repeat_password"
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                  ></input>
              </div>
                  </div>
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
