import React from "react";
import "./App.css";
import "./signin.css";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <div class="container  backgroundColour marketing">
          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h3 class="featurette-heading">
                Our address...
                <span class="text-muted">Find us on the quay!</span>
              </h3>
              <p class="lead">
              Anchorage 1 
              Anchorage Quay Salford, 
              The Quays, 
              Manchester M50 3YJ
              </p>
            </div>
            <div class="col-md-5">
              <img
                src="/html/pix/yingyue_stepBystep_500px.jpg"
                width="350"
                height="350"
                class="img-responsive"
              />
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">
                Event or not to Event?...
                <span class="text-muted">Covid 19 creates an event void</span>
              </h2>
              <p class="lead">
                Unfortunately due to Covid 19 all our 2020 events have been
                cancelled. However, our Etsy shop is doing fabulously and you
                can buy all sorts of goodies on there!{" "}
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <a
                id="etsyLink"
                href="https://www.etsy.com/shop/oo0SheFeltGood0oo"
              >
                <img
                  src="/html/pix/etsy2_4feltoons_500px.png"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">
                She Felt Good on Instagram...
                <span class="text-muted">
                  Keeping up to date with all our latest posts!
                </span>
              </h2>
              <p class="lead">
                These little criters are also in the Gallery. Inspired by
                kawaii, and collection culture.
              </p>
            </div>
            <div class="col-md-5"></div>
          </div>

          <hr class="featurette-divider"></hr>
        </div>
      </div>
    );
  }
}
