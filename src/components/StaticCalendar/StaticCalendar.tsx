import React from 'react';
import "./StaticCalendar.css";

interface StaticCalendarProps {
  year: number;
  month: number; // Месяц от 0 (январь) до 11 (декабрь)
  highlightDay: number; // День, который нужно подсветить
}

export const StaticCalendar: React.FC<StaticCalendarProps> = ({ year, month, highlightDay }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDayOfWeek = new Date(year, month, 1).getDay();

  // Создаем массив дней месяца
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Определяем класс для подсвеченной даты
  const getDayClass = (day: number) => {
    return day === highlightDay ? 'highlight' : '';
  };

  return (
    <div className="calendar">
      <div className="month">
        {Array.from({ length: startDayOfWeek }, (_, i) => <div key={i} className="day empty"></div>)}
        {daysArray.map(day => (
          <div key={day} className={`day ${getDayClass(day)}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

