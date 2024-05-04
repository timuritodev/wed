/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import "./MainPage.css";
import Countdown from "react-countdown";
import { useSearchParams } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar";

export const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const names = [
    searchParams.get("p1"),
    searchParams.get("p2"),
    searchParams.get("p3"),
    searchParams.get("p4"),
    searchParams.get("p5"),
  ].filter(Boolean) as string[];

  function generateGreeting(names: string[]): string {
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
  }

  const greeting = generateGreeting(names);

  return (
    <main className="main">
      <div className="main__container">
        <Countdown date="2024-07-19" className="countdown-timer" />
        <h3 className="main__title">{greeting}</h3>
        <p className="main__description">
          Один день в этом году станет для нас
          <br /> особенно важным, и мы хотим провести
          <br /> его в кругу близких и друзей!
          <br /> С большим удовольствием приглашаем
          <br /> Вас на нашу свадебную вечеринку.
          <br /> которая состоится:
        </p>
        <h4 className="main__date">19 июля 2024 года</h4>
        <Calendar year={2024} month={6} highlightDay={23} />
        <p className="main__description">
          Пихта
          <br /> Заповедная зона
          <br />
          по адресу: проспект Максима Горького, 2М
          <br /> г. Набережные Челны
        </p>
      </div>
    </main>
  );
};
