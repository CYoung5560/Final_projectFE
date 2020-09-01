import React from "react";
import "./App.css";

export default class MovieTitle extends React.Component {
  constructor() {
    super();
  }
 

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        {/* Jumbotron Header*/}
        <section class="jumbotron text-center">
          <div class="container">
            <h2>{this.props.movieName}</h2>
          </div>
        </section>
        </div>

       
       
    );
  }
}
