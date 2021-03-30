import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

function Bookcard({title,image,description,Button}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}
      </Card.Text>
      <Button></Button>
      </Card.Body>

  </Card>
  );
}

export default Bookcard;