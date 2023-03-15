/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Card({ data, count }) {
  return (
    <>
      <div className="card" style={{ width: "12rem" }}>
        <img
          src={data.image}
          className="card-img-top"
          style={{ width: "100%", objectFit: "cover", height: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "12px" }}>{data.titulo}</p>
          </div>
          <p style={{ fontSize: "12px", textAlign: "justify" }}>
            {data.descripcion}
          </p>

          <div>
            <div>
              <p>Categoria : {data.categoria}</p>
            </div>

            <div
              style={{
                display: "flex",
              }}
            >
              <p>Equipo :</p>
              <a href={data.link} title={data.equipo}>
                {data.equipo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
