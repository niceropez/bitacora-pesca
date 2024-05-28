import { ChangeEvent } from "react";
import { FormDatax } from "../Interfaces/interfaces";
import Card from "@mui/material/Card/Card";

interface IEffortSection {
  formData: FormDatax;
  i: number;
  handleEffortChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const EffortSection: React.FC<IEffortSection> = (props) => {
  return (
    <Card sx={{ backgroundColor: "#B2BEB5", p: 3, mb: 1 }}>
      <div className="row">
        <div className="col-6">Lance</div>
        <div className="col-6">
          <input
            type="text"
            name={`efforts[${props.i}].lance`}
            value={props.formData.efforts[props.i].lance}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Discriminação</div>
        <div className="col-4">Lançamento</div>
        <div className="col-4">Recolhimento</div>
      </div>
      <div className="row">
        <div className="col-4">Data (dia/mês)</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].lan_data`}
            value={props.formData.efforts[props.i].lan_data}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].rec_data`}
            value={props.formData.efforts[props.i].rec_data}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Hora/min (inicial)</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].lan_hr_ini`}
            value={props.formData.efforts[props.i].lan_hr_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].rec_hr_ini`}
            value={props.formData.efforts[props.i].rec_hr_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Hora/min (final)</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].lan_hr_fin`}
            value={props.formData.efforts[props.i].lan_hr_fin}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].rec_hr_fin`}
            value={props.formData.efforts[props.i].rec_hr_fin}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">No de Anzóis</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].nro_anz`}
            value={props.formData.efforts[props.i].nro_anz}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].nro_anz`}
            value={props.formData.efforts[props.i].nro_anz}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">No de Samburás</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].nro_samb`}
            value={props.formData.efforts[props.i].nro_samb}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].nro_samb`}
            value={props.formData.efforts[props.i].nro_samb}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Temp de Superfície</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].temp`}
            value={props.formData.efforts[props.i].temp}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].temp`}
            value={props.formData.efforts[props.i].temp}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Profundidade (m)</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].prof`}
            value={props.formData.efforts[props.i].prof}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].prof`}
            value={props.formData.efforts[props.i].prof}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Latitude(inicial) N/S</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].lan_lat_ini`}
            value={props.formData.efforts[props.i].lan_lat_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].rec_lat_ini`}
            value={props.formData.efforts[props.i].rec_lat_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Longitude(inicial) W</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].lan_long_ini`}
            value={props.formData.efforts[props.i].lan_long_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].rec_long_ini`}
            value={props.formData.efforts[props.i].rec_long_ini}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Tipo de isca</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].isca`}
            value={props.formData.efforts[props.i].isca}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].isca`}
            value={props.formData.efforts[props.i].isca}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">Light-Stick (sim/não)</div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].ls`}
            value={props.formData.efforts[props.i].ls}
            onChange={(e) => props.handleEffortChange(e, props.i)}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            name={`efforts[${props.i}].ls`}
            value={props.formData.efforts[props.i].ls}
            onChange={(e) => props.handleEffortChange(e, props.i)}
            disabled
          />
        </div>
      </div>
    </Card>
  );
};

export default EffortSection;
