import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

function MyVerticallyCenteredModal({ show, onClose, onButton }) {

  const [product, setProduct] = useState({});

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header closeButton onClick={onClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Name:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Title"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}

          />
          <br />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Description:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Title"
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}

          />
          <br />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Price:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Title"
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}

          />
          <br />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Number in stock:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Title"
            onChange={(e) => {
              setProduct({ ...product, numberInStock: e.target.value });
            }}
          />
          <br />
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">
              Image URL:
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Title"
            onChange={(e) => {
              setProduct({ ...product, imageUrl: e.target.value });
            }}

          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={() => onButton(product)}>
          Add
        </Button>
      </Modal.Footer>
    </Modal >
  );
}
export default MyVerticallyCenteredModal;
