import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { AddWeather, UpdWeather } from "./Store/AsyncActions/weather";

function Example(props) {
  var isUpdating = props.weather != null;
  var newWeather = props.weather ? { ...props.weather } : {
    temperatureC: 0,
    summary: "asd",
  }
  var invokedFunction = props.addFun;

  const [weather, setState] = useState(newWeather);

  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState({
      ...weather,
      [name]: value
    });
  }

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                autoFocus
                value={weather.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Temp</Form.Label>
              <Form.Control
                type="number"
                name="temperatureC"
                autoFocus
                value={weather.temperatureC}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Summary</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name="summary"
                value={weather.summary}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={() => invokedFunction ? invokedFunction(weather) : dispatch(!isUpdating ? AddWeather(weather) : UpdWeather(weather))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;