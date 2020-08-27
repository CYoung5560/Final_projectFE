import React from "react";
import "./App.css";
//import axios from 'axios';

export default class Login extends React.Component {
  
  render() {
    return (
      <div>
        Welcome to the login Page
        <form class="form-signin" method="GET" >

        <h1 class="h3 mb-3 font-weight-normal">Welcome! Please sign in</h1>
        <label for="email" class="sr-only">Email address</label>
        <input type="email" name="username" id="customerEmail" class="form-control" placeholder="Email address" required autofocus>
        <br>
        <label for="password" class="sr-only">Password</label>
        <input type="password" name="userpwd" id="customerPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-md btn-secondary btn-block" type="submit" onclick="getCustomerData(this.form)">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; SFG 2020</p>
      </form>  
      </div>
    )
  }
}



