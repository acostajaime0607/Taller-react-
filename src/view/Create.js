import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextDB } from "../context/ContextDB";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  const { category, newCardSport } = useContext(ContextDB);

  const [newCard, setNewCard] = useState({
    titulo: "",
    descripcion: "",
    image: "",
    link: "",
    equipo: "",
    categoria: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const changeForm = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();

    if (newCard.titulo === "") {
      setError("El campo titulo es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.titulo.length < 3 || newCard.titulo.length > 20) {
      setError(
        "Campo titulo es requerido, mínimo 3 caracteres, maximo 20 caracteres"
      );
      clearError();
      return;
    }

    if (newCard.categoria === "") {
      setError("El campo categoria es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.image === "") {
      setError("El campo image es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.equipo === "") {
      setError("El campo nombre del equipo es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.equipo.length < 3 || newCard.equipo.length > 15) {
      setError("Campo requerido, mínimo 3 caracteres, maximo 15 caracteres");
      clearError();
      return;
    }

    if (newCard.link === "") {
      setError("El campo pagina oficial del equipo es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.link.length < 10 || newCard.link.length > 100) {
      setError(
        "campo campo pagina oficial requerido, mínimo 10 caracteres, maximo 50 caracteres"
      );
      clearError();
      return;
    }

    if (newCard.descripcion === "") {
      setError("El campo descripcion del equipo es un campo obligatorio");
      clearError();
      return;
    }

    if (newCard.descripcion.length < 50 || newCard.descripcion.length > 200) {
      setError("campo requerido, mínimo 50 caracteres, maximo 200 caracteres");
      clearError();
      return;
    }

    newCardSport({ id: uuidv4(), ...newCard });

    navigate("/");
  };

  const clearError = () => {
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <h1>Registrar un nuevo deporte</h1>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}!!!!
            </div>
          )}

          <form onSubmit={save}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="titulo del deporte"
                  name="titulo"
                  onChange={changeForm}
                  min={3}
                  max={20}
                />
              </div>
              <div className="col">
                <select
                  className="form-control mt-2"
                  placeholder="categoria"
                  name="categoria"
                  onChange={changeForm}
                >
                  <option>Selecciona una categoria</option>
                  {category.map((data) => (
                    <option key={data.id} value={data.value}>
                      {data.type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row ">
              <div className="col">
                <input
                  type="url"
                  className="form-control mt-4"
                  placeholder="Imagen del deporte"
                  name="image"
                  onChange={changeForm}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mt-4"
                  placeholder="Nombre del equipo"
                  name="equipo"
                  onChange={changeForm}
                  min={3}
                  max={15}
                />
              </div>
            </div>

            <div className="row ">
              <div className="col">
                <input
                  type="url"
                  className="form-control mt-4"
                  placeholder="Pagina oficial del equipo"
                  name="link"
                  onChange={changeForm}
                  min={10}
                  max={50}
                />
              </div>
              <div className="col">
                <textarea
                  type="text"
                  className="form-control mt-4"
                  placeholder="Descripcion del deporte"
                  name="descripcion"
                  onChange={changeForm}
                  minLength={50}
                  maxLength={200}
                ></textarea>
              </div>
            </div>

            <button className="btn btn-primary mb-5">Guardar</button>
          </form>
        </div>
      </div>
    </>
  );
}
