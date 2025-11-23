import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";

const Formulario = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="m-3 d-flex justify-content-between">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
            ➕
          </Button>
        </Form.Group>

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
      <ListaTarea />
    </div>
  );
};

export default Formulario;
