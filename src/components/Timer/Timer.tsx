import React from "react";
import Countdown from "react-countdown";
import "./Timer.css";

export interface CountdownTimeDelta {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  completed: boolean;
}

const Completionist: React.FC = () => <span>Событие началось!</span>;

const renderer: React.FC<CountdownTimeDelta> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="countdown-timer">
        <div className="countdown-segment">
          {days}
          <span> дней</span>
        </div>
        <div className="countdown-segment">
          {hours}
          <span> часов</span>
        </div>
        <div className="countdown-segment">
          {minutes}
          <span> минут</span>
        </div>
        <div className="countdown-segment">
          {seconds}
          <span> секунд</span>
        </div>
      </div>
    );
  }
};

export const Timer: React.FC = () => {
  return <Countdown date="2024-07-19" renderer={renderer} />;
};
