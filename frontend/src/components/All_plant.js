import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
function All_plant() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/plant/add").then((response) => {
      console.log(response.data);
      setPlants(response.data);
    });
  }, []);
  return (
    <Row>
      {plants.map((item, index) => {
        return (
          <Col key={index}>
            <h3>Plant Name: {item.name}</h3>
            <h3>Color: {item.color}</h3>
            <h3>Style : {item.style}</h3>
            <img src={`http://localhost:5000/${item.photoPicSelect}`}></img>
          </Col>
        );
      })}
    </Row>
  );
}

export default All_plant;
