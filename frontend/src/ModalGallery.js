import React from "react";
import {useState} from "react";
import "./App.css";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

export default class ModalGallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  setShow = (bool) => {this.setState( { show: bool }); };

  handleClose = () => { this.setShow(false); };

  handleShow = () => { this.setShow(true); };

  render() {
    return (
      <div>
        <Modal
          show={this.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
