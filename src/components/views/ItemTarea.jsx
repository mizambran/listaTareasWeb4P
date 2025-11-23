import { ListGroup, Button } from "react-bootstrap";


const ItemTarea = () => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        Cras justo odio
        <Button variant="secondary">❌</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
