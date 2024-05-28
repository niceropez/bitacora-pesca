import React, { ChangeEvent } from "react";
import { FormDatax, ItemDisposalData } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

interface IDisposalSection {
  formData: FormDatax;
  i: number;
  handleDisposalsChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleDisposalItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    disposalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemDisposalData
  ) => void;
}

const DisposalSection: React.FC<IDisposalSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <div className="row">
        <div className="col-6">Lance</div>
        <div className="col-6">
          <input
            type="text"
            name={`disposals[${props.i}].lance`}
            value={props.formData.disposals[props.i].lance}
            onChange={(e) => props.handleDisposalsChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Especies</div>
        <div className="col-4">Nº de vivos</div>
        <div className="col-4">Nº de mortos</div>
      </div>
      {props.formData.disposals[props.i].items.map((_, j) => (
        <Item
          key={j}
          formData={props.formData}
          i={props.i}
          j={j}
          handleDisposalItemChange={props.handleDisposalItemChange}
        />
      ))}
    </Card>
  );
};

export default DisposalSection;

interface IItem {
  formData: FormDatax;
  i: number;
  j: number;
  handleDisposalItemChange: (
    e: ChangeEvent<HTMLInputElement>,
    disposalIndex: number,
    itemIndex: number,
    itemKey: keyof ItemDisposalData
  ) => void;
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          value={props.formData.disposals[props.i].items[props.j].desc}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          value={props.formData.disposals[props.i].items[props.j].desc_m}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc_m")
          }
        />
      </div>
      <div className="col-4">
        <input
          type="text"
          value={props.formData.disposals[props.i].items[props.j].desc_v}
          onChange={(e) =>
            props.handleDisposalItemChange(e, props.i, props.j, "desc_v")
          }
        />
      </div>
    </div>
  );
};
