import React, { useContext } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../Styles/Card.css";
import { CardContext } from "../Context/CardContext";
export const Cards = () => {
  const { result, randompj } = useContext(CardContext);
  const { name, image, gender, species, origin } = result;

  return (
    <div className="content">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Gender: {gender}</ListGroupItem>
            <ListGroupItem>Species: {species}</ListGroupItem>
            <ListGroupItem>Origin: {origin.name}</ListGroupItem>
          </ListGroup>

          <Button variant="primary" onClick={randompj}>
            Random Character
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
