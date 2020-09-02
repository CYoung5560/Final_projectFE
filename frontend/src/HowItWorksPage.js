import React from "react";
import "./App.css";

export default class HowItWorks extends React.Component {
  render() {
    return (
      <div>
          <section class="jumbotron text-center">
          <div class="container">
            <h1>Booking</h1>
            {/* <p class="lead text-muted">Screen 1</p> */}
          </div>
        </section>
        <div class="container  backgroundColour marketing">
        <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                Our address...
                <span class="text-muted">Find us on the quay!</span>
              </h4>
              <p class="lead">
                Anchorage 1 <br/>
                Anchorage Quay Salford,<br/> 
                The Quays, <br/>
                Manchester <br/>
                M50 3YJ <br/>
              </p>
            </div>
            <div class="col-md-5">
              <img
                alt="QA DriveIn front view"
                src={require("./images/externalDriveIn_500px.jpg")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h4 class="featurette-heading">
                Directions...
                <span class="text-muted">How to get to us by public transport</span>
              </h4>
              <p class="lead">
                <a href="https://tfgm.com/public-transport/tram/stops/anchorage-tram" target="_blank">Get here by tram</a><br/>
                <a href="https://tfgm.com/public-transport/bus" target="_blank">Get here by bus</a><br/>
                <a href="https://www.nationalrail.co.uk/stations_destinations/247895.aspx" target="_blank">Get here by train</a><br/>
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              
                <img
                alt="Down town public transport"
                src={require("./images/downtown_500px.jpg")}
                width="100%"
                height="100%"
                class="img-responsive"
              ></img>
            
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h4 class="featurette-heading">
                
                Sat Nav Savvy...
                <span class="text-muted">
                  
                  Find us on Google Maps!
                </span>
              </h4>
              <p class="lead">
                Sat Nav Postcode:M50 3YJ
              </p>
            </div>
            <div class="col-md-5">
            
            </div>
          </div>

          <hr class="featurette-divider"></hr>
        </div>
      </div>
    );
  }
}
