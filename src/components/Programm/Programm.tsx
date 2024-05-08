import { FC } from "react";
import "./Programm.css";
import { IProgramm } from "../../types/Programm.types";

export interface IProgrammProps {
  data: IProgramm;
}

export const Programm: FC<IProgrammProps> = ({ data }) => {
  return (
    <div className="programm">
      <img src={data.pic} className="programm__pic" alt="pic" />
      <p className="programm__time">{data.time}</p>
      <p className="programm__text">{data.text}</p>
    </div>
  );
};
