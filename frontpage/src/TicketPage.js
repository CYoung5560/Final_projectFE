import React from "react";
import "./App.css";
import "./signin.css";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Movie</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Gremlins</option>
              <option>Hellraiser</option>
              <option>Goonies</option>
              <option>Spririted Away</option>
              <option>Sea Fever</option>
              <option>Howl's Moving Castle</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Date</Form.Label>
            <DayPicker
            // todayButton="Vandaag"
            // selected={startDate}
            // onChange={date => setStartDate(date)}
            />

            <Form.Control as="select" defaultValue="Choose..."></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time</Form.Label>

            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Gremlins</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
