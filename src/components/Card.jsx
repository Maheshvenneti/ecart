import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ data, onClick = () => {} }) {
  return (
    <Card style={{ width: "18rem" }} onClick={onClick}>
      <Card.Img variant="top" src={data.thumbnail} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
