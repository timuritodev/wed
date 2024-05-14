import { FC } from "react";
import "./DressCode.css";

interface DressCodeProps {
  colors: string[];
}

export const DressCode: FC<DressCodeProps> = ({ colors }) => {
  return (
    <div className="dresscode">
      <div className="dresscode__container">
        <h1 className="dresscode__title">DRESS CODE</h1>
        <p className="dresscode__text">
          Мы будем очень рады если вы поддержите цветовую палитру нашей свадьбы:
        </p>
        <div className="colors">
          {colors.map((color) => (
            <div
              key={color}
              className="color"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
