/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from "react";
import "./MainPage.css";
import Countdown from "react-countdown";
import { useSearchParams } from "react-router-dom";
import { Calendar } from "../../components/Calendar/Calendar";
import { Timer } from "../../components/Timer/Timer";
import { ImageBlock } from "../../components/ImageBlock/ImageBlock";
import { ProgrammList } from "../../components/Programm/ProgrammList";
import { colors, programm } from "../../utils/constants";
import { DressCode } from "../../components/DressCode/DressCode";
import { FormBlock } from "../../components/FormBlock/FormBlock";
import { LastImageBlock } from "../../components/LastImageBlock/LastImageBlock";
import { MapBlock } from "../../components/MapBlock/MapBlock";

export const MainPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const names = [
    searchParams.get("p1"),
    searchParams.get("p2"),
    searchParams.get("p3"),
    searchParams.get("p4"),
    searchParams.get("p5"),
  ].filter(Boolean) as string[];

  const determineGender = (name: string) => {
    const lastChar = name.slice(-1).toLowerCase();
    return lastChar === "а" || lastChar === "я" ? "female" : "male";
  };

  const generateGreeting = (names: string[]) => {
    if (!names.length) {
      return "ДОРОГИЕ гости!";
    }
    if (names.length === 1) {
      const gender = determineGender(names[0]);
      return gender === "female"
        ? `ДОРОГАЯ ${names[0]}!`
        : `ДОРОГОЙ ${names[0]}!`;
    }
    const last = names[names.length - 1];
    if (!names.length) {
      const gender = determineGender(last!);
      return gender === "female" ? `ДОРОГАЯ ${last}!` : `ДОРОГОЙ ${last}!`;
    }
    return `ДОРОГИЕ ${names.slice(0, -1).join(", ")} и ${last}!`;
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
        <h4 className="main__date">19 июля 2024 года</h4>
        <Calendar year={2024} month={6} highlightDay={19} />
        <p className="main__description">
          Пихта
          <br /> Заповедная зона
          <br />
          по адресу: Травянка, 4
          <br /> г. Набережные Челны
        </p>
        <MapBlock />
        <h1 className="main__title">Программа дня</h1>
        <ProgrammList data={programm} />
        <DressCode colors={colors} />
        <h1 className="main__title">Анкета гостя</h1>
        <FormBlock names={names} />
        <LastImageBlock />
      </div>
    </main>
  );
};
