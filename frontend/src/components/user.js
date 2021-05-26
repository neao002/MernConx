import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Add_new() {
  const [user, setUserName] = useState({
    name: "",
    email: "",
    password: " ",
  });

  const addingUser = (event) => {
    event.preventDefault();
    console.log(user);
    const jsoncreateUser = JSON.stringify(user);
    console.log(jsoncreateUser);

    const config = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "Token",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("http://localhost:5000/user/create", jsoncreateUser, config)
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <Row>
      <Col>
        <h1>New User Login</h1>
        <Form onSubmit={addingUser}>
          <Form.Group controlId="plantName">
            <Form.Label>Plant Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={(e) => setUserName({ ...user, name: e.target.value })}
            />
            <Form.Control
              name="style"
              type="email"
              placeholder="What is your email?"
              onChange={(e) => setUserName({ ...user, email: e.target.value })}
            />
            <Form.Control
              name="password"
              type="text"
              placeholder="What is your password?"
              onChange={(e) =>
                setUserName({ ...user, password: e.target.value })
              }
            />
          </Form.Group>
          <Link to="/all_plant">
            <Button variant="danger" type="submit">
              Create
            </Button>
          </Link>
        </Form>
      </Col>
    </Row>
  );
}

export default Add_new;
