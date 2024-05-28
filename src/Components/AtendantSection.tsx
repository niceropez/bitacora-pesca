import React, { ChangeEvent } from "react";
import { FormDatax } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

interface IAtendantSection {
  formData: FormDatax;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AtendantSection: React.FC<IAtendantSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <p>F. RESPONSÁVEL PELO PREENCHIMENTO</p>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nome do mestre:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="nome_mestre"
              value={props.formData.nome_mestre}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nº de registro SEAP/PR:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="seap_pr"
              value={props.formData.seap_pr}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Link Ass.:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="link_assinatura"
              value={props.formData.link_assinatura}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Nº de inscr. cap. portos:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="inscr_cap"
              value={props.formData.inscr_cap}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex">
          <div className="col-6">
            <label>Link pdf:</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="link_pdf"
              value={props.formData.link_pdf}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AtendantSection;
