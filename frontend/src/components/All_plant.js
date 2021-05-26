import { Row, Col, Alert } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function All_plant() {
  const [plants, setPlants] = useState([]);
  const [deleteMsg, setDeleteMsg] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/plant/add").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  }, [deleteMsg]);

  const deletePlant = (id) => {
    axios.get("/plant/delete/" + id).then((response) => {
      setDeleteMsg(response.data);
    });
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
          </Col>
        );
      })}
    </Row>
  );
}

export default All_plant;
