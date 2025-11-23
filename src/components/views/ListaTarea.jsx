
import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({tareas}) => {
  return (
    <div>
      <ListGroup className="mt-5">
        {
            tareas.map((tarea, index) => <ItemTarea key={index} tarea={tarea} />) 
        }
      </ListGroup>
    </div>
  );
};

export default ListaTarea;
