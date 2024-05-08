/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import "./MainPage.css";
import Countdown from "react-countdown";
import { useSearchParams } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar";
import { Timer } from "../../components/Timer/Timer";
import { ImageBlock } from "../../components/ImageBlock/ImageBlock";
import { ProgrammList } from "../../components/Programm/ProgrammList";
import { programm } from "../../utils/constants";

export const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const names = [
    searchParams.get("p1"),
    searchParams.get("p2"),
    searchParams.get("p3"),
    searchParams.get("p4"),
    searchParams.get("p5"),
  ].filter(Boolean) as string[];

  const generateGreeting = (names: string[]) => {
    if (!names.length) {
      return "ДОРОГИЕ гости!";
    }
    if (names.length === 1) {
      return `ДОРОГОЙ ${names[0]}!`;
    }
    const last = names.pop();
    if (!names.length) {
      return `ДОРОГОЙ ${last}!`;
    }
    return `ДОРОГИЕ ${names.join(", ")} и ${last}!`;
  };

  const greeting = generateGreeting(names);

  return (
    <main className="main">
      <div className="main__container">
        <ImageBlock />
        <h1 className="main__title">{greeting}</h1>
        <p className="main__description">
          Один день в этом году станет для нас особенно важным, и мы хотим
          провести его в кругу близких и друзей! С большим удовольствием
          приглашаем Вас на нашу свадебную вечеринку, которая состоится:
        </p>
        {/* <p className="main__description">
          Один день в этом году станет для нас
          <br /> особенно важным, и мы хотим провести
          <br /> его в кругу близких и друзей!
          <br /> С большим удовольствием приглашаем
          <br /> Вас на нашу свадебную вечеринку.
          <br /> которая состоится:
        </p> */}
        <h4 className="main__date">19 июля 2024 года</h4>
        <Calendar year={2024} month={6} highlightDay={19} />
        <p className="main__description">
          Пихта
          <br /> Заповедная зона
          <br />
          по адресу: проспект Максима Горького, 2М
          <br /> г. Набережные Челны
        </p>
        <h1 className="main__title">Программа дня</h1>
        <ProgrammList data={programm} />
      </div>
    </main>
  );
};
