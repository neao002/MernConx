import { Row, Col, Alert, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function All_plant() {
  const [plants, setPlants] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();
  const [show, setShow] = useState(false);
  const [updateMsg, setUpdateMsg] = useState();
  const [plantData, setPlantData] = useState({
    name: "",
    style: "",
    color: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/plant/add").then((response) => {
      console.log(response.data);
      setPlants(response.data);
      setDeleteMsg(null);
      setUpdateMsg(null);
    });
  }, [deleteMsg]);

  const deletePlant = (id) => {
    axios.get("/plant/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
    });
  };

  const modalClose = () => {
    setShow(false);
  };

  const updating = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/plant/update", {
        id: e.target.id.value,
        name: e.target.name.value,
        style: e.target.style.value,
        color: e.target.color.value,
      })
      .then((response) => {
        setUpdateMsg(response.data);
        setShow(false);
      });
    window.location.reload(false);
  };

  const bringPlant = (id) => {
    axios.get("http://localhost:5000/plant/update/" + id).then((response) => {
      setPlantData(response.data);
    });
    setShow(true);
  };

  return (
    <Row>
      <h1>My plants</h1>
      {deleteMsg != null && <Alert variant="success">{deleteMsg}</Alert>}

      {plants.map((item, index) => {
        return (
          <Col key={item._id}>
            <h3>Plant Name: {item.name}</h3>
            <h3>Color: {item.color}</h3>
            <h3>Style : {item.style}</h3>

            <button type="button" onClick={() => deletePlant(item._id)}>
              Delete
            </button>
            <button type="button" onClick={() => bringPlant(item._id)}>
              Detail/update
            </button>
          </Col>
        );
      })}
      <Modal show={show} onHide={modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plant Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updateMsg != null && <Alert variant="success">{updateMsg}</Alert>}
          <Form onSubmit={updating}>
            <input type="hidden" name="id" value={plantData._id} />
            <Form.Group>
              <Form.Label>Plant Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={plantData.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plant Style</Form.Label>
              <Form.Control
                type="text"
                name="style"
                defaultValue={plantData.style}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plant Color</Form.Label>

              <Form.Control
                type="text"
                name="color"
                defaultValue={plantData.color}
              />
            </Form.Group>

            <Button variant="danger" type="submit">
              Update changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Row>
  );
}

export default All_plant;
