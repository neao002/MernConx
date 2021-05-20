import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Add_new() {
  const [data, setName] = useState({
    name: "",
    style: "",
    color: " ",
  });
  const [picture, setPicture] = useState();

  const add = (event) => {
    event.preventDefault();
    const getData = new FormData();
    getData.append("name", data.name);
    getData.append("style", data.style);
    getData.append("color", data.color);
    console.log(picture);
    getData.append("photoPicSelect", picture);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("http://localhost:5000/plant/add", getData, config)
      .then((response) => {
        console.log(response.data);
      });
  };

  const getPic = (event) => {
    setPicture(event.target.files[0]);
  };
  return (
    <Row>
      <Col>
        <h1>Add New Plant/tree/Herb</h1>
        <Form onSubmit={add}>
          <Form.Group controlId="plantName">
            <Form.Label>Plant Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="What is your plant/trees name?"
              onChange={(e) => setName({ ...data, name: e.target.value })}
            />
            <Form.Control
              name="style"
              type="text"
              placeholder="What is your plant/trees Color?"
              onChange={(e) => setName({ ...data, style: e.target.value })}
            />
            <Form.Control
              name="color"
              type="text"
              placeholder="What is your plant/trees Type?"
              onChange={(e) => setName({ ...data, color: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Upload a Picture"
              onChange={getPic}
              name="photoPicSelect"
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Add to Garden
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Add_new;
