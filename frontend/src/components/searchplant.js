import React from "react";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Searchplant() {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getResult = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/plant/add/${searchKey}`)
      .then((response) => {
        console.log(response.data, "here");
        setSearchResult(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Row>
        <Col>
          <Form onSubmit={getResult} className="mt-5 ml-5" inline>
            <FormControl
              name="name"
              type="text"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />

            <button className="w-25 btn btn-primary">search</button>
          </Form>
        </Col>
      </Row>
      <div>
        {searchResult.map((item, index) => {
          return <h1 key={index}>{item.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default Searchplant;
