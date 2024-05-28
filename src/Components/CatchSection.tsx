import React, { ChangeEvent } from "react";
import { FormDatax, ItemCatchData } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

interface ICatchSection {
  formData: FormDatax;
  i: number;
  handleCatchChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleCatchItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    catchIndex: number,
    itemIndex: number,
    itemKey: keyof ItemCatchData
  ) => void;
}

const CatchSection: React.FC<ICatchSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <div className="row">
        <div className="col-6">Lance</div>
        <div className="col-6">
          <input
            type="text"
            name={`catch[${props.i}].lance`}
            value={props.formData.catch[props.i].lance}
            onChange={(e) => props.handleCatchChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Especies</div>
        <div className="col-4">Nº</div>
        <div className="col-4">Kg</div>
      </div>
      {props.formData.catch[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          handleCatchItemChange={props.handleCatchItemChange}
        />
      ))}
    </Card>
  );
};

export default CatchSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  handleCatchItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    catchIndex: number,
    itemIndex: number,
    itemKey: keyof ItemCatchData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          value={props.formData.catch[props.i].items[props.j].capt_sp}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          name={`catch[${props.i}].items[${props.j}].capt_sp_n`}
          value={props.formData.catch[props.i].items[props.j].capt_sp_n}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp_n")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          name={`catch[${props.i}].items[${props.j}].capt_sp_kg`}
          value={props.formData.catch[props.i].items[props.j].capt_sp_kg}
          onChange={(e) =>
            props.handleCatchItemChange(e, props.i, props.j, "capt_sp_kg")
          }
        />
      </div>
    </div>
  );
};
