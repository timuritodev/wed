import { FC } from "react";
import "./ImageBlock.css";
// import pic from '../../images/pic.jpeg';
import pic from "../../images/main_pic5_1.jpg";
import logo from "../../images/te2.png";
import { Timer } from "../Timer/Timer";

export const ImageBlock: FC = () => {
  return (
    <div className="image-block">
      <img className="image-block__pic" src={pic} alt="pic" />
      <div className="image-block__wrapper">
        <img className="image-block__logo" src={logo} alt="pic2" />
        <Timer />
      </div>
    </div>
  );
};
