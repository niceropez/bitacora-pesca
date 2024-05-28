import React, { ChangeEvent } from "react";
import { FormDatax, ItemIncidentalData } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

interface IIncidentalSection {
  formData: FormDatax;
  i: number;
  handleIncidentalsChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleIncidentalItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    incidentalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemIncidentalData
  ) => void;
}

const IncidentalSection: React.FC<IIncidentalSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <div className="row">
        <div className="col-6">Lance</div>
        <div className="col-6">
          <input
            type="text"
            name={`inciCatch[${props.i}].lance`}
            value={props.formData.inciCatch[props.i].lance}
            onChange={(e) => props.handleIncidentalsChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Especies</div>
        <div className="col-4">Nº de vivos</div>
        <div className="col-4">Nº de mortos</div>
      </div>
      {props.formData.inciCatch[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          handleIncidentalItemChange={props.handleIncidentalItemChange}
        />
      ))}
    </Card>
  );
};

export default IncidentalSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  handleIncidentalItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    incidentalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemIncidentalData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          value={props.formData.inciCatch[props.i].items[props.j].bycatch}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          value={props.formData.inciCatch[props.i].items[props.j].bycatch_m}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch_m")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          value={props.formData.inciCatch[props.i].items[props.j].bycatch_v}
          onChange={(e) =>
            props.handleIncidentalItemChange(e, props.i, props.j, "bycatch_v")
          }
        />
      </div>
    </div>
  );
};
