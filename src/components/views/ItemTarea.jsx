import { ListGroup, Button } from "react-bootstrap";


const ItemTarea = ({tarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea}
        <Button variant="secondary">❌</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
