import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface SimpleCalendarProps {
  highlightDate: Date; // Дата, которую нужно подсветить
}

const SimpleCalendar: React.FC<SimpleCalendarProps> = ({ highlightDate }) => {
  // Функция для стилизации даты, которую нужно подсветить
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    // Подсвечиваем дату только в режиме просмотра месяца
    if (view === 'month' && date.getDate() === highlightDate.getDate() &&
        date.getMonth() === highlightDate.getMonth() &&
        date.getFullYear() === highlightDate.getFullYear()) {
      return 'highlight';
    }
  };

  return (
    <div>
      <Calendar
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default SimpleCalendar;
