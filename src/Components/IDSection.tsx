import Card from "@mui/material/Card/Card";
import React, { ChangeEvent } from "react";
import { FormDatax } from "../Interfaces/interfaces";

interface IIDSection {
  formData: FormDatax;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const IDSection: React.FC<IIDSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>A. IDENTIFICAÇÃO</p>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nome da Embarcação:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="nome_emb"
              value={props.formData.nome_emb}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Empresa/Armador:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="emp_armador"
              value={props.formData.emp_armador}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Porto de Saída:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="saida_porto"
              value={props.formData.saida_porto}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Porto de Chegada:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="chegada_porto"
              value={props.formData.chegada_porto}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Data de Saída:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="saida_data"
              value={props.formData.saida_data}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Data de Chegada:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="chegada_data"
              value={props.formData.chegada_data}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IDSection;
