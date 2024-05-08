import "./Programm.css";
import { FC } from "react";
import { Programm } from "./Programm";
import { IProgramm } from "../../types/Programm.types";

export interface IProgrammListProps {
  data: IProgramm[];
}

export const ProgrammList: FC<IProgrammListProps> = ({ data }) => {
  return (
    <div className="programmlist">
      {data.length !== 0 &&
        data.map((item) => <Programm key={item.id} data={item} />)}
    </div>
  );
};
