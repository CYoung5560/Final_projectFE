import React from "react";
import "./App.css";
import "./signin.css";

export default class Login extends React.Component {
  render() {
    return (
      <div>
            <form class="form-signin">
              <h1 class="h3 mb-3 font-weight-normal">
                Welcome! Please sign in
              </h1>
              <label for="email" class="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="username"
                id="customerEmail"
                class="form-control"
                placeholder="Email address"
                required
                autofocus
              ></input>
              <br></br>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                type="password"
                name="userpwd"
                id="customerPassword"
                class="form-control"
                placeholder="Password"
                required
              ></input>
              {/* <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me">Remember me</input>
          </label>
        </div> */}
              <br></br>
              <button
                class="btn btn-md btn-secondary btn-block"
                type="submit"
                onclick="/"
              >
                Sign in
              </button>
            </form>
          
       
      </div>
    );
  }
}
