/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Card from "../Component/Card";
import { ContextDB } from "../context/ContextDB";

export default function Content() {
  const { deport, filterSportByCategory } = useContext(ContextDB);

  const [dataSelct, setDataSelct] = useState("");

  useEffect(() => {
    if (dataSelct && dataSelct !== "none") filterSportByCategory(dataSelct);
  }, [dataSelct]);

  return (
    <>
      <div className="container">
        <div style={{ margin: "20px" }}>
          <Form.Select
            aria-label="Default select example"
            size="sm"
            onChange={(e) => setDataSelct(e.target.value)}
          >
            <option value="none" disabled>
              Seleccionar una categoría
            </option>
            <option value="all">Ver todos</option>
            <option value="motor">Deportes de motor</option>
            <option value="mesa">Deportes de mesa </option>
            <option value="equipo">Deportes por equipo. </option>
          </Form.Select>
        </div>

        <div className="row">
          {deport.length !== 0 &&
            deport.map((data) => (
              <div key={data.id} className="col-sm">
                <Card data={data} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
