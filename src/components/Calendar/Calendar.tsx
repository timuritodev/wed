import React from "react";
import "./Calendar.css";

interface CalendarProps {
  year: number;
  month: number; // Месяц от 0 (январь) до 11 (декабрь)
  highlightDay: number; // День, который нужно подсветить
}

export const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  highlightDay,
}) => {
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const dayNames = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 0; i < (startDay ? startDay - 1 : 6); i++) {
    days.push(<div className="day empty" key={`empty-${i}`}></div>);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className={`day ${day === highlightDay ? "highlight" : ""}`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="calendar">
      <header>
        {monthNames[month]} {year}
      </header>
      <div className="weekdays">
        {dayNames.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>
      <div className="days">{days}</div>
    </div>
  );
};
