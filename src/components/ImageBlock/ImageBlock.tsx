import { FC } from "react";
import "./ImageBlock.css";
import pic from '../../images/pic.jpeg';
import { Timer } from "../Timer/Timer";

export const ImageBlock: FC = () => {
  return (
    <div className="image-block">
      <img className="image-block__pic" src={pic} alt="pic" />
      <Timer />
    </div>
  );
};
