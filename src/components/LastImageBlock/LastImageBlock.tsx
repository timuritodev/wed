import { FC } from "react";
import "./LastImageBlock.css";
import pic from "../../images/main_pic3.jpg";
import logo from "../../images/te2.png";

export const LastImageBlock: FC = () => {
  return (
    <div className="lastimage-block">
      <img className="lastimage-block__pic" src={pic} alt="pic" />
      <div className="lastimage-block__wrapper">
        <img className="lastimage-block__logo" src={logo} alt="pic2" />
        <p className="lastimage-block__text">
          БУДЕМ РАДЫ
          <br />
          ВИДЕТЬ ВАС!
        </p>
      </div>
    </div>
  );
};
