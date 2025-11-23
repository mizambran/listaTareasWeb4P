import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [tareas, setTareas] = useState([]);

  const posteriorValidacion = (data) => {
    setTareas([...tareas, data.tarea]);

    reset();
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(posteriorValidacion)}>
        <Form.Group className="m-3 d-flex justify-content-between">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La tarea debe tener como minimo dos caracteres",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener como maximo cincuenta caracteres",
              },
            })}
          />
          <Button variant="primary" type="submit">
            ➕
          </Button>
        </Form.Group>

        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
      <ListaTarea tareas={tareas}></ListaTarea>
    </div>
  );
};

export default Formulario;
