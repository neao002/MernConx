import { Row, Col } from "react-bootstrap";
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
      console.log(response.data);
      setDeleteMsg(response.data);
    });
  };

  return (
    <Row>
      {plants.map((item, index) => {
        return (
          <Col key={item._id}>
            <h3>Plant Name: {item.name}</h3>
            <h3>Color: {item.color}</h3>
            <h3>Style : {item.style}</h3>
            <img src={`http://localhost:5000/${item.photoPicSelect}`} />
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
