import React from "react";
import "./App.css";
import "./signin.css";
import Table from "react-bootstrap/Table";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h5>Find Us:</h5>
        <p>8, St James's Bldg, 61-95 Oxford St, Manchester M1 6FQ</p>

        <h5>Opening Times:</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Day</th>
              <th>Times</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>10.00am - 10.00pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>10.00am - 12.00am</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>10.00am - 12.00am</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>10.00am - 10.00pm</td>
            </tr>

          </tbody>
        </Table>

        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            ></input>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}
