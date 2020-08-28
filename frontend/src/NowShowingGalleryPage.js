import React from "react";
import "./App.css";
export default class PersonList extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        {/* Jumbotron Header screen 1*/}
        <section class="jumbotron text-center">
          <div class="container">
            <h1>Now Showing on screen 1!</h1>
            {/* <p class="lead text-muted">Screen 1</p> */}
          </div>
        </section>

        {/* Start of gallery cards for Screen 1*/}
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              </div>
              </div>
              {/* End of gallery cards for screen 1 */}
              <br></br>
              <br></br>
              {/* Jumbotron Header screen 2*/}
              <section class="jumbotron text-center">
                <div class="container">
                  <h1>Now Showing on screen 2!</h1>
                  {/* <p class="lead text-muted">Screen 1</p> */}
                </div>
              </section>
              <br></br>
              {/* Start of gallery cards for screen 2 */}
            <div class="album py-5 bg-light">
              <div class="container">
                <div class="row">
                <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img
                    src=""
                    width="100%"
                    height="100%"
                    class="img-responsive"
                  ></img>
                  <div class="card-body">
                    <p class="card-text">Movie</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-secondary">
                          Coming soon!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
              {/* End of gallery cards for screen 1 */}
           
        </div>
      </div>
      </div>
    );
  }
}
