import React from "react";
import "./App.css";
import {BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Gallery from './GalleryPage';
import Login from './LoginPage';
import Signup from './SignupPage';

function HomePage(){
  return <h1> Home Page </h1>
}

function AboutusPage(){
  return <h1> About Page </h1>
}

function GalleryPage(){
  return <Gallery/>
}
function LoginPage(){
  return <Login/>
}

function SignupPage(){
  return <Signup/>
}

function TicketPage(){
  return <h1> Ticket Page </h1>
}

// Nav bar component
export default class Navbar extends React.Component {
  render() {
    return (

      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          QA DRIVE IN
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/"><span class="navbar-brand mb-0 h1">Home</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/about"><span class="navbar-brand mb-0 h1">About</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/gallery"><span class="navbar-brand mb-0 h1">Gallery</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/login"><span class="navbar-brand mb-0 h1">Login</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/signup"><span class="navbar-brand mb-0 h1">Signup</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/tickets"><span class="navbar-brand mb-0 h1">Tickets</span></Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about/" component={AboutusPage} />
          <Route exact path="/gallery/" component={GalleryPage} />
          <Route exact path="/login/" component={LoginPage} />
          <Route exact path="/signup/" component={SignupPage} />
          <Route exact path="/tickets/" component={TicketPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
